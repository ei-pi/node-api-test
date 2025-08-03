import { createRequire } from "node:module";
import type { Addon } from "../addon/addon";

export const addon: Addon = createRequire(import.meta.url)("../build/Release/node-api-test-native.node");
