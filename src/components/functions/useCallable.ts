import { useFunctions } from "reactfire";

export function useCallable<T = any, R = any>(
  name: string
): (data: T) => Promise<R> {
  const functions = useFunctions();
  const callable = functions.httpsCallable(name);
  return async (data: T) => (await callable(data)).data;
}
