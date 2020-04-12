import * as React from "react";
import { useFunctions } from "reactfire";

export const Fetcher: React.FC = () => {
  const functions = useFunctions();
  const foobar = functions.httpsCallable("foobar");
  const [foo, setFoo] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    async function getFoobar() {
      const { data } = await foobar();
      setFoo(data.foo);
    }
    getFoobar();
  });

  if (!foo) {
    return <div>loading</div>;
  }

  return <div>foo: {foo}</div>;
};
