import * as React from "react";
import { firebaseCtx } from "./ctx";

export function useFirebase() {
  const ctx = React.useContext(firebaseCtx);
  return React.useMemo(() => ctx, [ctx]);
}
