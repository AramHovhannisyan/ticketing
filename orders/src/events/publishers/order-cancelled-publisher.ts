import { OrderCancelledEvent, OrderCreatedEvent, Publisher, Subjects } from "@hopar/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}