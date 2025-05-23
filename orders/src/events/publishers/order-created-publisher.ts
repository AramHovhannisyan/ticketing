import { OrderCreatedEvent, Publisher, Subjects } from "@hopar/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
}