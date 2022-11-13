import { uuid } from "uuidv4";
import * as zod from "zod";

export const idSchema = zod.string().uuid();

export type IdValue = zod.infer<typeof idSchema>;

export class UniqueID {
  constructor(public value?: IdValue) {
    if (value) {
      idSchema.parse(value);
      Object.freeze(this);
    }

    this.value = uuid();
  }

  public equals(id: UniqueID): boolean {
    return this.value === id.value;
  }
}
