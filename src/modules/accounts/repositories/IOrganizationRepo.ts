import { Organization } from "../domain/Organization";

export type IOrganizationRepo = {
  save(organization: Organization): Promise<void>;
};
