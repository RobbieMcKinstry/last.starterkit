// This file contains the application's configurables.
// All environment variables used by the application
// are declared here, including database connection values.

import { Config, Effect } from "effect";

// TODO: produce mock configuration values for tests.
//       See: https://effect.website/docs/configuration/#mocking-configurations-in-tests
const PostgresConfig = Config.all({
  USER: Config.withDefault(Config.nonEmptyString("USER"), "postgres"),
  PASSWORD: Config.nonEmptyString("PASSWORD"),
  HOST: Config.withDefault(Config.nonEmptyString("HOST"), "127.0.0.1"),
  DATABASE: Config.withDefault(Config.nonEmptyString("DATABASE"), "postgres"),
  PORT: Config.withDefault(Config.number("PORT"), 5432),
  SSL: Config.withDefault(Config.boolean("SSL"), false),
});

// This is the final config, which combines the namespaced Postgres
// configuration with other misc values.
// TODO: Add configuration for the log level.
// TODO: Add configuration for the environment: DEV, STAGING, PROD, etc.
// TODO: Add configuration for request timeouts.
export const AppConfig = Config.all([
  Config.all({
    PORT: Config.number("PORT"),
  }),
  Config.nested(PostgresConfig, "POSTGRES"),
]);

// This is the type of the configurables described by the above struct.
export type AppConfig = Config.Config.Success<typeof AppConfig>;

// This service is injected into all contexts after the server boots.
export default class AppConfigService extends Effect.Service<AppConfig>()(
  "AppConfig",
  {
    effect: AppConfig,
    dependencies: [],
  },
) {}
