import { UseCase } from "../../../shared/core/UseCase";
import { ChatRoomMemberId } from "../domain/ChatRoomMember";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo"

type Request = {
  scheduledMessageId: string;
  chatRoomMemberId: ChatRoomMemberId;
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
    if (!(msg.chatRoomMemberId === request.chatRoomMemberId)) {
      throw `request userId=${request.chatRoomMemberId} is not match to scheduled message userId=${msg.chatRoomMemberId}`
    }
    const res = await this.scheduledChatMessageRepo.delete(msg.id.value)
    return res
  }
}