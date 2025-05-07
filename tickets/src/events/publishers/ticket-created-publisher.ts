import { Publisher, Subjects, TicketCreatedEvent } from '@hopar/common';
import { Stan } from 'node-nats-streaming';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;

  constructor(client: Stan) {
    super(client);
  }
}
