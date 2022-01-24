export function MapValues<T extends object>(
  obj: T
): Record<string, any> & { [K in keyof T]: T[K] } {
  return obj;
}
