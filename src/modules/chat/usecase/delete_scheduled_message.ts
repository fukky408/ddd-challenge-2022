import { UniqueID } from "../../../shared/domain/UniqueID";

import { ScheduledChatMessageRepo } from "../infra/repository/ScheduledMessage"
import { ChatRoomRepo } from "../infra/repository/chatRoom"

export class DeleteScheduledMessage {
  private scheduledChatMessageRepo: ScheduledChatMessageRepo;
  private chatRoomRepo: ChatRoomRepo;

  constructor(chatRoomRepo: ChatRoomRepo, scheduledChatMessageRepo: ScheduledChatMessageRepo) {
    this.scheduledChatMessageRepo = scheduledChatMessageRepo
    this.chatRoomRepo = chatRoomRepo
  }

  do(id: UniqueID) {
    const msg = this.scheduledChatMessageRepo.get(id)
    const chatRoom = this.chatRoomRepo.get(msg.chatId)
    if (!chatRoom.memberExist(msg.userId)) {
      throw "member not include in chatroom"
    }
    this.scheduledChatMessageRepo.delete(id)
  }
}