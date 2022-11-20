import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";
import { UseCase } from "../../../shared/core/UseCase";
import { ChatRoomId } from "../domain/ChatRoom";
import { ChatRoomMemberId } from "../domain/ChatRoomMember";
import {
  ScheduleStatus,
  ScheduleStatusCandidate,
} from "../domain/ScheduleStatus";
import { MessageBody } from "../domain/MessageBody";
import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo";

type Request = {
  body: MessageBody;
  chatRoomMemberId: ChatRoomMemberId;
  chatRoomId: ChatRoomId;
  sendScheduledAt: Date;
};

type Response = boolean;

export class CreateScheduledMessage
  implements UseCase<Request, Promise<Response>>
{
  constructor(
    private chatRoomRepo: IChatRoomRepo,
    private scheduledChatMessageRepo: IScheduledChatMessageRepo
  ) {}

  public async execute(request: Request): Promise<Response> {
    const chatRoom = await this.chatRoomRepo.findById(request.chatRoomId);
    if (!chatRoom) {
      throw new Error(`chatRoomId=${request.chatRoomId}) not found.`);
    }
    if (!chatRoom.isMember(request.chatRoomMemberId)) {
      throw new Error("member not include in chatroom");
    }
    const msg = new ScheduledChatMessage({
      body: request.body,
      chatRoomMemberId: request.chatRoomMemberId,
      chatRoomId: request.chatRoomId,
      scheduleStatus: new ScheduleStatus(ScheduleStatusCandidate.SCHEDULED),
      sendScheduledAt: request.sendScheduledAt,
    });
    const res = await this.scheduledChatMessageRepo.save(msg);
    return res;
  }
}
