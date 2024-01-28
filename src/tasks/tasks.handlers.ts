import { CommandHandler, QueryHandler } from '@nestjs/cqrs';
import { AddTaskCommand, CompleteTaskCommand } from './tasks.commands';
import { GetTasksQuery } from './tasks.queries';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];

@CommandHandler(AddTaskCommand)
export class AddTaskHandler {
  execute(command: AddTaskCommand) {
    const task: Task = {
      id: tasks.length.toString(),
      title: command.title,
      completed: false,
    };
    tasks.push(task);
    return task;
  }
}

@CommandHandler(CompleteTaskCommand)
export class CompleteTaskHandler {
  execute(command: CompleteTaskCommand) {
    const task = tasks.find((t) => t.id === command.taskId);
    if (task) {
      task.completed = true;
      return task;
    }
    return null;
  }
}

@QueryHandler(GetTasksQuery)
export class GetTasksHandler {
  execute(query: GetTasksQuery) {
    return tasks;
  }
}
