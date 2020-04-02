import * as React from "react";
import { authCtx } from "./ctx";

export function useSession() {
  const ctx = React.useContext(authCtx);
  return React.useMemo(() => ctx, [ctx]);
}
