import { TicketCreatedEvent } from "./ticket-created-event";
import { Subjects } from "./subjects";
import Publisher from "./base-publisher";

export default class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject:Subjects.TicketCreated = Subjects.TicketCreated;
}
