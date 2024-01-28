import { ICommand } from '@nestjs/cqrs';

export class AddTaskCommand implements ICommand {
  constructor(public readonly title: string) {}
}

export class CompleteTaskCommand implements ICommand {
  constructor(public readonly taskId: string) {}
}
