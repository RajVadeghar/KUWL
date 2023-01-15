/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const client =
  global.prisma ||
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"]
  });

if (process.env.NODE_ENV !== "production") global.prisma = client;

export default client;
