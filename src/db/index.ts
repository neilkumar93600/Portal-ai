import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(process.env.DATABASE_URL || "postgresql://dummy:dummy@dummy/dummy");
