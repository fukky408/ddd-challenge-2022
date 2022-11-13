import { UniqueID } from "../../../shared/domain/UniqueID";
import { ScheduledChatMessageRepo } from "../infra/repository/ScheduledMessage"

export class DeleteScheduledMessage {
  private repo: ScheduledChatMessageRepo;

  constructor(repo: ScheduledChatMessageRepo) {
    this.repo = repo
  }

  do(id: UniqueID) {
    this.repo.delete(id)
  }
}