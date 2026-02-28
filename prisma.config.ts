import { env } from "./config/env";
import { defineConfig } from "prisma/config";

console.log("Prisma config loaded with DATABASE_URL:", env.DATABASE_URL);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env.DATABASE_URL,
  },
});
