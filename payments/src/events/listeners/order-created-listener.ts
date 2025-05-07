import { Message } from "node-nats-streaming";
import { Listener, OrderCreatedEvent, Subjects } from "@hopar/common";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;

  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    const { id, version, userId, status, ticket } = data;

    const { price } = ticket;

    const order = Order.build({ id, version, userId, status, price });

    await order.save();

    msg.ack();
  }
}
