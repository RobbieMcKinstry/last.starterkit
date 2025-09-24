// This module contains code related to dependency injection.
// All route handlers have different context injected into them,
// allowing them to access globals with robust, type-safe error handling.
// These globals are available as part of the "context" of the request.
//
// For example, all config values are available by reading the Config
// object from context. The database connection and logger are also
// available as part of the application context.

import { Layer } from "effect/index";
import AppConfigService from "@/config";
import DatabaseService from "@/database/service";

// The `BaseLayer` is the list of Services (i.e. dependencies) that
// are always injected into every request.
export const BaseLayer = Layer.mergeAll(
  AppConfigService.Default,
  DatabaseService.Default,
);
