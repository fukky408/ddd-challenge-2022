import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";
import { UseCase } from "../../../shared/core/UseCase";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo";


type Response = ScheduledChatMessage[];

export class GetShouldScheduledMessage
  implements UseCase<void, Promise<Response>>
{
  constructor(
    private scheduledChatMessageRepo: IScheduledChatMessageRepo
  ) {}

  public async execute(): Promise<Response> {
    const now = new Date()
    const msgs = await this.scheduledChatMessageRepo.findOverScheduledTime(now)
    return msgs
  }
}
