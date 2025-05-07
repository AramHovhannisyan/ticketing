import { ExpirationCompleteEvent, Publisher, Subjects } from "@hopar/common";
import { queueGroupName } from "./queue-group-name";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

  queueGroupName = queueGroupName;
}
