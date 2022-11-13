import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";
import { ScheduledChatMessageRepo } from "../infra/repository/ScheduledMessage"
import { ChatRoomRepo } from "../infra/repository/chatRoom"

export class CreateScheduledMessage {
  private scheduledChatMessageRepo: ScheduledChatMessageRepo;
  private chatRoomRepo: ChatRoomRepo;

  constructor(chatRoomRepo: ChatRoomRepo, scheduledChatMessageRepo: ScheduledChatMessageRepo) {
    this.scheduledChatMessageRepo = scheduledChatMessageRepo
    this.chatRoomRepo = chatRoomRepo
  }

  do(msg: ScheduledChatMessage) {
    const chatRoom = this.chatRoomRepo.get(msg.chatId)
    if (!chatRoom.memberExist(msg.userId)) {
      throw "member not include in chatroom"
    }
    this.scheduledChatMessageRepo.save(msg)
  }
}