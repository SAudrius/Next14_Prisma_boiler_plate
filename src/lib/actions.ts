"use server";
import { getUsersData } from "./data/users";

export const getUsers = async () => {
  const userData = await getUsersData();
  return userData;
};
