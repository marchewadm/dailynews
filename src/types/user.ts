import type * as z from "zod";
import type {
  profileEmailUpdateSchema,
  profileInfoUpdateSchema,
  profilePasswordUpdateSchema,
} from "@/schemas/profileSchemas";

export type ProfileInfoUpdateFormValues = z.infer<typeof profileInfoUpdateSchema>;
export type ProfileEmailUpdateFormValues = z.infer<typeof profileEmailUpdateSchema>;
export type ProfilePasswordUpdateFormValues = z.infer<typeof profilePasswordUpdateSchema>;
