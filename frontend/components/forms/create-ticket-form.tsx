"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateTicketFormValues,
  createTicketSchema,
} from "@/lib/validations/ticket";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { FormError } from "@/components/common/form-error";
import { createTicket } from "@/services/ticket.service";
import { useRouter } from "next/navigation";

export default function CreateTicketForm() {
  const router = useRouter();
  const form = useForm<CreateTicketFormValues>({
    resolver: zodResolver(createTicketSchema),
    defaultValues: {
      title: "",
      category: "",
      priority: "",
      description: "",
      attachmentUrl: "",
    },
  });

  const onSubmit = async (values: CreateTicketFormValues) => {
    try {
      await createTicket(values);

      router.replace("/tickets");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Ticket title"
          {...form.register("title")}
        />

        <FormError message={form.formState.errors.title?.message} />
      </div>
      <div className="space-y-2">
        <Label>Category</Label>

        <Select
          onValueChange={(value) =>
            form.setValue("category", value, { shouldValidate: true })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="HARDWARE">Hardware</SelectItem>

            <SelectItem value="SOFTWARE">Software</SelectItem>

            <SelectItem value="NETWORK">Network</SelectItem>

            <SelectItem value="ACCOUNT">Account</SelectItem>

            <SelectItem value="OTHER">Other</SelectItem>
          </SelectContent>
        </Select>

        <FormError message={form.formState.errors.category?.message} />
      </div>
      <div className="space-y-2">
        <Label>Priority</Label>

        <Select
          onValueChange={(value) =>
            form.setValue("priority", value, { shouldValidate: true })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="LOW">Low</SelectItem>

            <SelectItem value="MEDIUM">Medium</SelectItem>

            <SelectItem value="HIGH">High</SelectItem>
          </SelectContent>
        </Select>

        <FormError message={form.formState.errors.priority?.message} />
      </div>
      <div className="space-y-2">
        <Label>Description</Label>

        <Textarea
          rows={6}
          placeholder="Describe the issue..."
          {...form.register("description")}
        />

        <FormError message={form.formState.errors.description?.message} />
      </div>
      <div>
        <div className="space-y-2">
          <Label htmlFor="attachmentUrl">Attachment URL</Label>

          <Input
            id="attachmentUrl"
            placeholder="https://example.com/file.pdf"
            {...form.register("attachmentUrl")}
          />

          <FormError message={form.formState.errors.attachmentUrl?.message} />
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Create Ticket
        </Button>
      </div>
    </form>
  );
}
