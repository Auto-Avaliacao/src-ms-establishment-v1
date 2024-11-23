import { Injectable } from '@nestjs/common';
import { PrismaServicePostgres } from './infra/port/out/database/prisma-postgres.service';

@Injectable()
export class AppService {
  constructor(private postgresService: PrismaServicePostgres){}

  async getHello(): Promise<string> {
    console.log('Tentando criar um novo estabelecimento...');
    try {
      await this.postgresService.establishment.create({
        data: {
          name: "Davi",
          description: "Teste",
          location: "Santo Andre",
        },
      });
      console.log('Estabelecimento criado com sucesso.');
    } catch (error) {
      console.error('Error creating establishment:', error);
    }
    return 'Hello World!';
  }
}
