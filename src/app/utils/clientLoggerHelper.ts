"use server";

import { logger } from "../logger";

export async function logDistanceToggle(newDistanceType: Distance) {
  logger.info(
    `clientLoggerHelper: distance type toggled to ${newDistanceType}`,
  );
}
