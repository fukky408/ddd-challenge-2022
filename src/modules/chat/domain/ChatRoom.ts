import { Entity } from "../../../shared/domain/Entity";
import { ChatRoomMember, ChatRoomMemberId } from "../domain/ChatRoomMember";
import { Nominal, nominal } from "nominal-types";

type ChatRoomProps = {
  name: string;
  chatRoomMembers: ChatRoomMember[];
  createdAt?: Date;
};

export type ChatRoomId = Nominal<"ChatRoomId", string>;

export class ChatRoom extends Entity<ChatRoomProps> {
  constructor(props: ChatRoomProps, id?: string) {
    super(props, id);
  }

  get chatRoomId(): ChatRoomId {
    return nominal.make<ChatRoomId>(this.id.value);
  }

  get chatRoomMembers() {
    return this.props.chatRoomMembers;
  }

  public changeName(newName: string) {
    return new ChatRoom({ ...this.props, name: newName });
  }

  public isMember(memberId: string) {
    const chatRoomMemberIds = this.chatRoomMembers.map((c) => c.id.value);
    return chatRoomMemberIds.includes(memberId);
  }

  public addChatRoomMember(chatRoomMember: ChatRoomMember) {
    const updated = [...this.chatRoomMembers, chatRoomMember];
    return new ChatRoom({ ...this.props, chatRoomMembers: updated });
  }

  // Q: interfaceを合わせて，chatRoomMemberを渡すようにしたほうが良い？
  public removeChatMember(memberId: ChatRoomMemberId) {
    const filtered = this.chatRoomMembers.filter(
      (m) => m.chatRoomMemberId !== memberId
    );
    return new ChatRoom({ ...this.props, chatRoomMembers: filtered });
  }
}
