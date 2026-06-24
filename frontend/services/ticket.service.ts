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