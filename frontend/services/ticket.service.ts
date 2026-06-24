import api from "@/lib/axios";

export const getTickets = async () => {
  const response = await api.get("/tickets");

  return response.data;
};