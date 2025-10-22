import 'dotenv/config';
import prisma from '../lib/prisma';

async function main() {
  try {
    const rows: Array<{ TABLE_NAME: string }> = await prisma.$queryRawUnsafe(
      `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE()`
    );

    console.log('Tables in database:');
    for (const r of rows) {
      console.log('-', r.TABLE_NAME);
    }
  } catch (err) {
    console.error('Error listing tables:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
