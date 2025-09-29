import prisma from '../lib/prisma';
import { hashPassword } from '../lib/auth';

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
  const adminPass = process.env.ADMIN_PASSWORD || 'admin123';

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin',
        role: 'ADMIN',
        passwordHash: await hashPassword(adminPass),
      },
    });
    console.log('Seeded admin user:', adminEmail);
  } else {
    console.log('Admin user already exists:', adminEmail);
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });


