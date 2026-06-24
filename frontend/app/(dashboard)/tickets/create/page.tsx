import CreateTicketForm from "@/components/forms/create-ticket-form";

export default function CreateTicketPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Create Ticket
        </h1>

        <p className="text-sm text-muted-foreground">
          Submit a new support ticket.
        </p>
      </div>

      <CreateTicketForm />
    </div>
  );
}