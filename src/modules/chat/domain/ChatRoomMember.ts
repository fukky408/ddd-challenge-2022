import { nominal, Nominal } from "nominal-types";
import { Entity } from "../../../shared/domain/Entity";
import { OrganizationMemberId } from "../../accounts/domain/OrganizationMember";

type ChatRoomMemberProps = {
  organizationMemberId: OrganizationMemberId;
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

  get organizationMemberId(): OrganizationMemberId {
    return nominal.make<OrganizationMemberId>(this.organizationMemberId);
  }
}
