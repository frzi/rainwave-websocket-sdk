import { RainwaveErrorObject } from "src/types/rainwaveErrorObject";

export function getSuccessFalse(
  obj: Record<string | number | symbol, unknown>
): RainwaveErrorObject | undefined {
  const found = Object.values(obj).find((result: unknown) => {
    if (result && typeof result === "object") {
      if ((result as Record<string, unknown>).success === false) {
        return true;
      }
    }
    return false;
  });
  if (found) {
    return found as RainwaveErrorObject;
  }
  return undefined;
}
