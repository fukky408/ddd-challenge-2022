import { z } from "zod";

const emailSchema = z.string().email();

export class Email {
  constructor(public value: string) {
    try {
      value = emailSchema.parse(value);
    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        throw new z.ZodError(err.issues);
      }
    }
  }
}
