// tasks.module.ts
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AddTaskHandler,
  CompleteTaskHandler,
  GetTasksHandler,
} from './tasks.handlers';
import { TasksController } from './tasks.controller';

@Module({
  imports: [CqrsModule],
  controllers: [TasksController],
  providers: [AddTaskHandler, CompleteTaskHandler, GetTasksHandler],
})
export class TasksModule {}
