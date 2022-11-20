import { UseCase } from "../../../shared/core/UseCase";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo"

type Request = {
  scheduledMessageId: string;
  userId: string;
}

type Response = boolean;

export class DeleteScheduledMessage implements UseCase<Request, Promise<Response>> {
  constructor(
    private scheduledChatMessageRepo: IScheduledChatMessageRepo
  ) { }

  public async execute(request: Request): Promise<Response> {
    const msg = await this.scheduledChatMessageRepo.findById(request.scheduledMessageId)
    if (!msg) {
      throw new Error(`scheduledMessageId=${request.scheduledMessageId}) not found.`);
    }
    if (!(msg.senderId === request.userId)) {
      throw `request userId=${request.userId} is not match to scheduled message userId=${msg.senderId}`
    }
    const res = await this.scheduledChatMessageRepo.delete(msg.id.value)
    return res
  }
}