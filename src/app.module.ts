import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaServicePostgres } from './infra/port/out/database/prisma-postgres.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaServicePostgres],
})
export class AppModule {}
