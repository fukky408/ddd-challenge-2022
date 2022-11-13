import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";
import { ScheduleStatus } from "./ScheduleStatus";

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
  postScheduledAt: Date;
  // TODO: ここ何入れる?
  createAt: Date;
  updatedAt: Date;
};

/**
 * 送信予定のチャットメッセージ
 */
export class ScheduledChatMessage extends Entity<ScheduledChatMessageProps> {
  public readonly id: UniqueID;
  public readonly userId: UniqueID;
  public readonly chatId: UniqueID;
  public readonly postScheduledAt: Date;

  constructor(props: ScheduledChatMessageProps, id?: string) {
    super(props, id);
  }

  static create(props: ScheduledChatMessageProps): ScheduledChatMessage {
    const now = new Date()
    if (now.getTime() > props.postScheduledAt.getTime()) {
      throw "dame"
    }
    return new ScheduledChatMessage(props)
  }
}
