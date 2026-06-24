import api from  "@/utils/api";
import { LoginDto, LoginResponse } from "@/types/auth";

export const login = async (
  data: LoginDto,
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);

  return response.data;
};