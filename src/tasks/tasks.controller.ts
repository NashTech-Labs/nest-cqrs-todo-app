import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddTaskCommand, CompleteTaskCommand } from './tasks.commands';
import { GetTasksQuery } from './tasks.queries';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async addTask(@Body('title') title: string) {
    return this.commandBus.execute(new AddTaskCommand(title));
  }

  @Post(':id/complete')
  async completeTask(@Body('id') id: string) {
    return this.commandBus.execute(new CompleteTaskCommand(id));
  }

  @Get()
  async getTasks() {
    return this.queryBus.execute(new GetTasksQuery());
  }
}
