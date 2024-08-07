import { ENDPOINTS } from "@/components/shared/constants/endpoints";
import axios from "axios";

export const getUsers = async () => {
    return (await axios.get(ENDPOINTS.GET_USERS)).data;
};

export const getUserById = async (userId: number) => {
  return (await axios.get(ENDPOINTS.GET_USERS, {params:{id:userId}})).data;
};
