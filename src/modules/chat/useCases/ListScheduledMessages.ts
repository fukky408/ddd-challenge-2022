import { UseCase } from "../../../shared/core/UseCase";
import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo";

type Request = {
  userId: string;
};

type Response = ScheduledChatMessage[];

export class ListScheduledMessages
  implements UseCase<Request, Promise<Response>>
{
  constructor(private scheduledChatMessageRepo: IScheduledChatMessageRepo) {}

  public async execute(request: Request): Promise<Response> {
    const msgs = await this.scheduledChatMessageRepo.findByUserId(
      request.userId
    );
    if (!msgs.length) {
      throw new Error(
        `userId=${request.userId} does not have scheduled messages.`
      );
    }
    return msgs;
  }
}
