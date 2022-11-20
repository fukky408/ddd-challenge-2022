

import { Entity } from "../../../shared/domain/Entity";
import { ScheduleStatus } from "./ScheduleStatus";
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
    super(props, id);
  }

  get chatRoomId(): ChatRoomId {
    return nominal.make<ChatRoomId>(this.id.value);
  }

  get chatRoomMemberId(): string {
    return this.chatRoomMemberId;
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
}