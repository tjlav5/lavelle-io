import * as React from "react";

export const authCtx = React.createContext<firebase.User | null>(null);
