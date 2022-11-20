

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
  postScheduledAt: Date;
  createdAt?: Date;
};

/**
 * 送信予定のチャットメッセージ
 */
export class ScheduledChatMessage extends Entity<ScheduledChatMessageProps> {
  constructor(props: ScheduledChatMessageProps, id?: string) {
    const now = new Date()
    if (props.scheduleStatus.value === ScheduleStatusCandidate.SCHEDULED && props.postScheduledAt < now) {
      throw new Error("post scheduled at is must be feature!")
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

  get postScheduledAt(): Date {
    return this.postScheduledAt
  }

  public changeChatRoomId(chatRoomId: ChatRoomId) {
    return new ScheduledChatMessage({ ...this.props, chatRoomId });
  }
  public changeBody(body: string) {
    return new ScheduledChatMessage({ ...this.props, body });
  }
  public changePostScheduledAt(postScheduledAt: Date) {
    return new ScheduledChatMessage({ ...this.props, postScheduledAt });
  }

  public changeScheduleStatus(status: ScheduleStatus) {
    return new ScheduledChatMessage({...this.props, scheduleStatus: status})
  }
}