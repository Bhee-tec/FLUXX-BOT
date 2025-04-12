import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      telegramId: 123456789,
       username: 'someuser',
      firstName: 'John',
      lastName: 'Doe',
      points: 100,
    },
  });

  console.log(newUser);
}

createUser()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
