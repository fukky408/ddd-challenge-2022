import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";
import { UseCase } from "../../../shared/core/UseCase";
import { ChatRoomId } from "../domain/ChatRoom";
import {
  ScheduleStatus,
  ScheduleStatusCandidate,
} from "../domain/ScheduleStatus";
import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { IScheduledChatMessageRepo } from "../repositories/IScheduledChatMessageRepo";

type Request = {
  body: string;
  userId: string;
  chatRoomId: ChatRoomId;
  postScheduledAt: Date;
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
    if (!chatRoom.isMember(request.userId)) {
      throw new Error(`${request.userId}`);
    }
    const msg = new ScheduledChatMessage({
      body: request.body,
      senderId: request.userId,
      chatRoomId: request.chatRoomId,
      scheduleStatus: new ScheduleStatus(ScheduleStatusCandidate.SCHEDULED),
      postScheduledAt: request.postScheduledAt,
    });
    const res = await this.scheduledChatMessageRepo.save(msg);
    return res;
  }
}
