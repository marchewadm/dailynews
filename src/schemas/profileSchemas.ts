import { z } from "zod";

export const profileInfoUpdateSchema = z.object({
  name: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .max(50, { message: "Name must be at most 50 characters long" }),
});

export const profileEmailUpdateSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email"),
});

export const profilePasswordUpdateSchema = z
  .object({
    currentPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    newPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    newPassword2: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine(data => data.newPassword === data.newPassword2, {
    message: "Passwords do not match",
    path: ["newPassword2"],
  })
  .refine(data => data.currentPassword !== data.newPassword, {
    message: "New password must be different from the current one",
    path: ["newPassword"],
  });
