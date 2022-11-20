import { ScheduledChatMessage } from "../domain/ScheduledChatMessage"
import { UniqueID } from "../../../shared/domain/UniqueID";

export interface IScheduledChatMessageRepo {
  save(msg: ScheduledChatMessage): Promise<boolean>;
  findById(id: string): Promise<ScheduledChatMessage | undefined>;
  update(msg: ScheduledChatMessage): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}