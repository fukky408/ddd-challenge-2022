import { nominal, Nominal } from "nominal-types";
import { Entity } from "../../../shared/domain/Entity";
import { UserId } from "../../accounts/domain/User";
import { UserName } from "../../accounts/domain/UserName";

type ChatRoomMemberProps = {
  name: UserName;
  userId: UserId;
  joinedAt?: Date;
};

export type ChatRoomMemberId = Nominal<"ChatRoomMemberId", string>;

export class ChatRoomMember extends Entity<ChatRoomMemberProps> {
  constructor(props: ChatRoomMemberProps, id?: string) {
    super(props, id);
  }

  get chatRoomMemberId(): ChatRoomMemberId {
    return nominal.make<ChatRoomMemberId>(this.id.value);
  }
}
