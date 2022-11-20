import { Entity } from "../../../shared/domain/Entity";
import { OrganizationMember } from "./OrganizationMember";

type OrganizationProps = {
  organizationMember: OrganizationMember[];
};

export class Organization extends Entity<OrganizationProps> {
  constructor(props: OrganizationProps, id?: string) {
    super(props, id);
  }
}
