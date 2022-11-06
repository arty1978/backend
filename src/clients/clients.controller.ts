import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  @Get()
  clients() {
    return this.clientsService.getClients();
  }

  constructor(private clientsService: ClientsService) {}
}
