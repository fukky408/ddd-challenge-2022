import { Entity } from "../../../shared/domain/Entity";
import { ScheduleStatus } from "./ScheduleStatus";
import { ChatRoomId } from "./ChatRoom";
import { ChatRoomMemberId } from "./ChatRoomMember";
import { nominal } from "nominal-types";
import { MessageBody } from "./MessageBody";

type ScheduledChatMessageProps = {
  body: MessageBody;
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

  get body(): string {
    return this.body;
  }

  get postScheduledAt(): Date {
    return this.postScheduledAt;
  }

  public changeChatRoomId(chatRoomId: ChatRoomId) {
    return new ScheduledChatMessage({ ...this.props, chatRoomId });
  }
  public changeBody(body: MessageBody) {
    return new ScheduledChatMessage({ ...this.props, body });
  }
  public changePostScheduledAt(postScheduledAt: Date) {
    return new ScheduledChatMessage({ ...this.props, postScheduledAt });
  }

  public changeScheduleStatus(status: ScheduleStatus) {
    return new ScheduledChatMessage({ ...this.props, scheduleStatus: status });
  }
}
