import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";
import { ChatRoom } from "../domain/ChatRoom";
import { ScheduledChatMessageRepo } from "../infra/repository/ScheduledMessage"

export class CreateScheduledMessage {
  private repo: ScheduledChatMessageRepo;

  constructor(repo: ScheduledChatMessageRepo) {
    this.repo = repo
  }

  do(chatRoom: ChatRoom, msg: ScheduledChatMessage) {
    if (!chatRoom.memberExist(msg.userId)) {
      throw "member not include in chatroom"
    }
    this.repo.save(msg)
  }
}