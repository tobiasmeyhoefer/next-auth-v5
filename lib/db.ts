import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}

//global this is not effected by hot reload

export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = db