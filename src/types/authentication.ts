import type * as z from "zod";
import type { loginSchema, registerSchema } from "@/schemas/authenticationSchemas";

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
