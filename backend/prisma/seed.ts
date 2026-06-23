import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await hash('password', 10);
  const userPassword = await hash('password', 10);

  await prisma.user.upsert({
    where: {
      email: 'admin@example.com',
    },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@example.com',
      password: adminPassword,
      role: Role.ADMIN,
    },
  });

  await prisma.user.upsert({
    where: {
      email: 'user@example.com',
    },
    update: {},
    create: {
      name: 'User',
      email: 'user@example.com',
      password: userPassword,
      role: Role.USER,
    },
  });

  console.log('✅ Seed berhasil');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
