import { nominal, Nominal } from "nominal-types";
import { Entity } from "../../../shared/domain/Entity";
import { UserId } from "../../users/domain/User";

type ChatRoomMemberProps = {
  name: string;
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
