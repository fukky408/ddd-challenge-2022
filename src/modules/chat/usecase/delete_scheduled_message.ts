import { UniqueID } from "../../../shared/domain/UniqueID";
import { ChatRoom } from "../domain/ChatRoom";
import { ScheduledChatMessageRepo } from "../infra/repository/ScheduledMessage"

export class DeleteScheduledMessage {
  private repo: ScheduledChatMessageRepo;

  constructor(repo: ScheduledChatMessageRepo) {
    this.repo = repo
  }

  do(chatRoom: ChatRoom, id: UniqueID) {
    const msg = this.repo.get(id)
    if (!chatRoom.memberExist(msg.userId)) {
      throw "member not include in chatroom"
    }
    this.repo.delete(id)
  }
}