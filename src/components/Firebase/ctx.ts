import * as React from "react";
import { FirebaseApp } from "@firebase/app-types";

export const firebaseCtx = React.createContext<FirebaseApp | null>(null);
export const authCtx = React.createContext<firebase.User | null>(null);
