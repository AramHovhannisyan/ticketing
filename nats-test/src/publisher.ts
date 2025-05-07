import nats from 'node-nats-streaming';
import TicketCreatedPublisher from './events/ticket-created-publisher';

console.clear();

const client = nats.connect('ticketing', 'abcd', {
  url: 'http://localhost:4222',
});

client.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(client);

  await publisher.publish({
    id: '123',
    title: 'concert',
    price: 20,
    userId: 123,
  });

  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'concert',
  //   price: 20,
  // });

  // client.publish('ticket:created', data, () => {
  //   console.log('Event published');
  // });
});
