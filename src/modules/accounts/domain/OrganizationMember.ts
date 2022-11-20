import { nominal, Nominal } from "nominal-types";
import { Entity } from "../../../shared/domain/Entity";
import { UserId } from "./User";
import { BotId } from "./Bot";

type OrganizationMemberProps = {
  userId?: UserId;
  botId?: BotId;
  roleKind: OrganizationRoleKind;
};

export type OrganizationRoleKind = "MEMBER" | "OWNER";

export type OrganizationMemberId = Nominal<"OrganizationMemberId", string>;

export class OrganizationMember extends Entity<OrganizationMemberProps> {
  constructor(props: OrganizationMemberProps, id?: string) {
    super(props, id);
  }

  get organizationMemberId(): OrganizationMemberId {
    return nominal.make<OrganizationMemberId>(this.id.value);
  }
}
