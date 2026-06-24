import api from "@/lib/axios";

export const getTickets = async () => {
  const response = await api.get("/tickets");

  return response.data;
};

export const createTicket = async (data: {
  title: string;
  category: string;
  priority: string;
  description: string;
}) => {
  const response = await api.post("/tickets", data);

  return response.data;
};

export const getTicketById = async (id: string) => {
  const response = await api.get(`/tickets/${id}`);

  return response.data;
};

export const createComment = async (
  ticketId: string,
  comment: string,
) => {
  const response = await api.post(
    `/tickets/${ticketId}/comments`,
    {
      comment,
    },
  );

  return response.data;
};

export const updateTicketStatus = async (
  ticketId: string,
  status: string,
) => {
  const response = await api.patch(
    `/tickets/${ticketId}/status`,
    {
      status,
    },
  );

  return response.data;
};