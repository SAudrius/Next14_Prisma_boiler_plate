import { prisma } from "@/prisma/db";

export const getUsersData = async () => {
  const users = await prisma.user.findMany();
  console.log("users query result === ", users);
  return users;
};
