import { z } from "zod";

export const createTicketSchema = z.object({
  title: z.string().min(3),
  category: z.string().min(1),
  priority: z.string().min(1),
  description: z.string().min(10),

  attachmentUrl: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
});

export type CreateTicketFormValues = z.infer<typeof createTicketSchema>;
