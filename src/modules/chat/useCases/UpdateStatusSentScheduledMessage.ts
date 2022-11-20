import { ScheduleStatusCandidate, ScheduleStatus } from "../domain/ScheduleStatus";
import { UseCase } from "../../../shared/core/UseCase";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo";


type Request = {
  scheduledMessageId: string
}

type Response = boolean;

export class UpdateStatusSentScheduledMessage
  implements UseCase<Request, Promise<Response>>
{
  constructor(
    private scheduledChatMessageRepo: IScheduledChatMessageRepo
  ) {}

  public async execute(request: Request): Promise<Response> {
    const msg = await this.scheduledChatMessageRepo.findById(request.scheduledMessageId)
    if (!msg) {
      throw new Error(`scheduledMessageId=${request.scheduledMessageId}) not found.`);
    }
    const status = new ScheduleStatus(ScheduleStatusCandidate.SCHEDULED)
    const updateMsg = msg.changeScheduleStatus(status)
    return await this.scheduledChatMessageRepo.update(updateMsg)
  }
}
