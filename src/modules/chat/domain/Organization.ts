import { Entity } from "../../../shared/domain/Entity";

type OrganizationProps = {
  name: string;
  createdAt?: Date;
};

export class Organization extends Entity<OrganizationProps> {
  constructor(props: OrganizationProps, id?: string) {
    super(props, id);
  }
}
