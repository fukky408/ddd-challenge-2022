import { ScheduledChatMessage } from "../domain/ScheduledChatMessage";

export interface IScheduledChatMessageRepo {
  save(msg: ScheduledChatMessage): Promise<boolean>;
  findById(id: string): Promise<ScheduledChatMessage | undefined>;
  findByUserId(userId: string): Promise<ScheduledChatMessage[]>;
  update(msg: ScheduledChatMessage): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  findOverScheduledTime(scheduledAt: Date): Promise<ScheduledChatMessage[]>
}
