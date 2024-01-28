import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [CqrsModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
