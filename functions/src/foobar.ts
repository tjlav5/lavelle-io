import { FoobarRequest, FoobarResponse } from "./messages/foobar";

export async function foobar(data: FoobarRequest, context: any) {
  return { foo: `bar baz ${data.age}` } as FoobarResponse;
}
