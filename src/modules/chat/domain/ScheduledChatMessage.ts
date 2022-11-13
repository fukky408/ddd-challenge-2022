import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";
import { ScheduleStatus } from "./ScheduleStatus";


class PostScheduledAt {
  public readonly date: Date

  constructor(date: Date) {
    const now = new Date()
    if (date.getTime() < now.getTime()) {
      throw 'PostScheduledAt must be future time.';
    }
    this.date = date
  }
}

type ScheduledChatMessageProps = {
  body: string;
  /**
   * スケジュールのステータス
   */
  userId: UniqueID;
  chatId: UniqueID;
  scheduleStatus: ScheduleStatus;
  /**
   * 送信予定日
   */
  postScheduledAt: PostScheduledAt;
  // TODO: ここ何入れる?
  postedAt: Date;
  updatedAt: Date;
};

/**
 * 送信予定のチャットメッセージ
 */
export class ScheduledChatMessage extends Entity<ScheduledChatMessageProps> {
  public readonly id: UniqueID;
  public readonly userId: UniqueID;
  public readonly chatId: UniqueID;

  constructor(props: ScheduledChatMessageProps, id?: string) {
    super(props, id);
  }
}
