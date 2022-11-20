

import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";
import { ScheduleStatus } from "./ScheduleStatus";

type ScheduledChatMessageProps = {
  body: string;
  userId: UniqueID;
  scheduleStatus: ScheduleStatus;
  postScheduledAt: Date;
  postedAt: Date;
  updatedAt: Date;
};

/**
 * 送信予定のチャットメッセージ
 */
export class ScheduledChatMessage extends Entity<ScheduledChatMessageProps> {
  constructor(props: ScheduledChatMessageProps, id?: string) {
    super(props, id);
  }
}