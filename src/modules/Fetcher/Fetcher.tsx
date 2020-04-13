import * as React from "react";
import { useCallable } from "../../components/functions/useCallable";
import {
  FoobarRequest,
  FoobarResponse
} from "../../../functions/src/messages/foobar";

export const Fetcher: React.FC = () => {
  const foobar = useCallable<FoobarRequest, FoobarResponse>("foobar");
  const [foo, setFoo] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    async function getFoobar() {
      const { foo } = await foobar({ age: 123 });
      setFoo(foo);
    }
    getFoobar();
  });

  if (!foo) {
    return <div>loading</div>;
  }

  return <div>foo: {foo}</div>;
};
