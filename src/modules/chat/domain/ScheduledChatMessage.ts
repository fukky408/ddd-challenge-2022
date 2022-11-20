import { Entity } from "../../../shared/domain/Entity";
import { ScheduleStatus, ScheduleStatusCandidate } from "./ScheduleStatus";
import { ChatRoomId } from "./ChatRoom";
import { ChatRoomMemberId } from "./ChatRoomMember";
import { nominal } from "nominal-types";

type ScheduledChatMessageProps = {
  body: string;
  chatRoomMemberId: ChatRoomMemberId;
  chatRoomId: ChatRoomId;
  scheduleStatus: ScheduleStatus;
  sendScheduledAt: Date;
  createdAt?: Date;
};

/**
 * 送信予定のチャットメッセージ
 */
export class ScheduledChatMessage extends Entity<ScheduledChatMessageProps> {
  constructor(props: ScheduledChatMessageProps, id?: string) {
    const now = new Date();
    const isScheduledInPast =
      props.scheduleStatus.value === ScheduleStatusCandidate.SCHEDULED &&
      props.sendScheduledAt < now;

    if (isScheduledInPast) {
      throw new Error(`sendScheduledAt=${props.sendScheduledAt} is past.`);
    }
    super(props, id);
  }

  get chatRoomId(): ChatRoomId {
    return nominal.make<ChatRoomId>(this.id.value);
  }

  get chatRoomMemberId(): ChatRoomMemberId {
    return this.chatRoomMemberId;
  }

  get body(): string {
    return this.body;
  }

  get sendScheduledAt(): Date {
    return this.sendScheduledAt;
  }

  public changeChatRoomId(chatRoomId: ChatRoomId) {
    return new ScheduledChatMessage({ ...this.props, chatRoomId });
  }
  public changeBody(body: string) {
    return new ScheduledChatMessage({ ...this.props, body });
  }
  public changePostScheduledAt(sendScheduledAt: Date) {
    return new ScheduledChatMessage({ ...this.props, sendScheduledAt });
  }

  public changeScheduleStatus(status: ScheduleStatus) {
    return new ScheduledChatMessage({ ...this.props, scheduleStatus: status });
  }
}
