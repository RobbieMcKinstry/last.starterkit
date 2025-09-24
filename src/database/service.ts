import postgres from "postgres";
import { Effect } from "effect";
import AppConfigService from "@/config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/database/schema";

export default class DatabaseService extends Effect.Service<DatabaseService>()(
  "Database",
  {
    effect: Effect.gen(function* () {
      const config = yield* AppConfigService;

      // TODO: Add SSL config.
      const client = postgres({
        host: config.POSTGRES_HOST,
        port: config.POSTGRES_PORT,
        database: config.POSTGRES_DATABASE,
        username: config.POSTGRES_USER,
        password: config.POSTGRES_PASSWORD,
      });

      const db = drizzle(client, { schema });
      return db;
    }),
    dependencies: [AppConfigService.Default],
  },
) {}
