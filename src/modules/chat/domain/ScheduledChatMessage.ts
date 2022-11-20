

import { Entity } from "../../../shared/domain/Entity";
import { ScheduleStatus } from "./ScheduleStatus";
import { ChatRoomId } from "./ChatRoom";
import { nominal } from "nominal-types";

type ScheduledChatMessageProps = {
  body: string;
  senderId: string;
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

  get senderId(): string {
    return this.senderId;
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