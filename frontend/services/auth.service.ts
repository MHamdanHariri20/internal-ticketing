import api from  "@/lib/axios";
import { LoginDto, LoginResponse } from "@/types/auth";

export const login = async (
  data: LoginDto,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", data);

  return response.data;
};