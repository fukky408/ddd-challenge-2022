import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";
import { ScheduledChatMessageRepo } from "../infra/repository/ScheduledMessage"

export class EditScheduledMessage {
  private repo: ScheduledChatMessageRepo;

  constructor(repo: ScheduledChatMessageRepo) {
    this.repo = repo
  }

  do(msg: ScheduledChatMessage) {
    this.repo.update(msg)
  }
}