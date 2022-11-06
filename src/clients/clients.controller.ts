import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ClientsService } from "./clients.service";

@Controller("clients")
export class ClientsController {
  @Get()
  clients() {
    return this.clientsService.getClients();
  }

  @Get("birthdays")
  birthdays() {
    return this.clientsService.getBirthdays();
  }

  @Get(":id")
  client(@Param("id", new ParseIntPipe()) id: number) {
    return this.clientsService.getClient(id);
  }

  constructor(private clientsService: ClientsService) {}
}
