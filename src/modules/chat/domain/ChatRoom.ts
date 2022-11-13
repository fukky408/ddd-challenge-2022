import { Entity } from "../../../shared/domain/Entity";
import { ChatRoomMember } from "../domain/ChatRoomMember";

type ChatRoomProps = {
  name: string;
  chatRoomMembers: ChatRoomMember[];
  createdAt?: Date;
};

export class ChatRoom extends Entity<ChatRoomProps> {
  constructor(props: ChatRoomProps, id?: string) {
    super(props, id);
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
}
