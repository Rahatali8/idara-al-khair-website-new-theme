// English: Fix the import path to use the correct Prisma import, usually from '@prisma/client'.
// Urdu Roman: Sahi import path use karein, aam tor par '@prisma/client' se import hota hai.
import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient | undefined;
}

const prisma = global.prismaGlobal || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = prisma;
}

export default prisma;


