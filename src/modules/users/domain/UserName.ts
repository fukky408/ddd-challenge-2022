import { z } from "zod";

const nameSchema = z.string().max(40);

export class UserName {
  constructor(public value: string) {
    try {
      value = nameSchema.parse(value);
    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        throw new z.ZodError(err.issues);
      }
    }
  }
}
