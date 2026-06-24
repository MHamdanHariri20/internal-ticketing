import { z } from "zod";

export const createTicketSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  priority: z.string().min(1, "Priority is required"),
  description: z.string().min(1, "Description is required"),
});

export type CreateTicketFormValues = z.infer<
  typeof createTicketSchema
>;