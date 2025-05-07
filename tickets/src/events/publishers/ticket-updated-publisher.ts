import { Publisher, Subjects, TicketUpdatedEvent } from '@hopar/common';
import { Stan } from 'node-nats-streaming';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;

  constructor(client: Stan) {
    super(client);
  }
}
