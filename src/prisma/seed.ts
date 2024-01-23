import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// This file is for creating first users
// If you don't see users run this commands `npx prisma db seed`
async function main() {
  const users = [
    {
      email: "foo@BarProp.com",
      password: "Password123",
    },
    {
      email: "John@Snow.com",
      password: "JohnPass",
    },
    {
      email: "User232@example.com",
      password: "Example123",
    },
  ];

  for (const user of users) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: user.email,
          password: user.password,
        },
      });
    }
  }
  prisma.$disconnect();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
