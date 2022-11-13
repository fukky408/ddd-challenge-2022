import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";
import { User } from "../../users/domain/User";
import { ChatRoomMember } from "./ChatRoomMember";

type ChatRoomProps = {
  name: string;
  adminUser: User;
  createdAt: Date;
  updatedAt: Date;
  chatRoomMembers: ChatRoomMember[]
};

export class ChatRoom extends Entity<ChatRoomProps> {
  public readonly id: UniqueID;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  private chatRoomMembers: ChatRoomMember[]

  constructor(props: ChatRoomProps, id?: string) {
    super(props, id);
  }

  memberExist(userid: UniqueID): boolean {
    const m = this.chatRoomMembers.find(member => {
      return member.userID === userid
    })
    return !!m
  }
}
