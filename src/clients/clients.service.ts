import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientsService {
  getClients() {
    return [
      {
        id: 1,
        firstName: "דני",
        lastName: "לוי",
      },
      {
        id: 2,
        firstName: "אברהם",
        lastName: "אבינו",
      },
    ];
  }

  getBirthdays() {
    return ["2022-01-01", "1980-01-05"];
  }

  getClient(id: number) {
    return this.getClients().find((x) => x.id == id);
  }
}
