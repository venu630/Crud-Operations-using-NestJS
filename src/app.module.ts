import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB_CONNECTION } from './configs/configs.db';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [EmployeesModule, MongooseModule.forRoot(MONGODB_CONNECTION)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
