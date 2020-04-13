import * as functions from "firebase-functions";

import { FoobarRequest, FoobarResponse } from "./messages/foobar";

export async function foobar(data: FoobarRequest, ctx: functions.EventContext) {
  console.log(ctx);
  return { foo: `bar baz ${data.age} ${ctx.auth?.uid}` } as FoobarResponse;
}
