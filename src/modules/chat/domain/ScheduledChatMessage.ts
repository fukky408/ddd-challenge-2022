import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";
import { ScheduleStatus } from "./ScheduleStatus";

type ScheduledChatMessageProps = {
  id: UniqueID;
  body: string;
  /**
   * スケジュールのステータス
   */
  userId: UniqueID;
  scheduleStatus: ScheduleStatus;
  /**
   * 送信予定日
   */
  postScheduledAt: Date;
  // TODO: ここ何入れる?
  postedAt: Date;
  updatedAt: Date;
};

/**
 * 送信予定のチャットメッセージ
 */
class ScheduledChatMessage extends Entity<ScheduledChatMessageProps> {
  constructor(props: ScheduledChatMessageProps, id?: string) {
    super(props, id);
  }
}
