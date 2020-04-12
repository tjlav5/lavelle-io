import * as functions from "firebase-functions";
import { foobar } from "./foobar";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.foobar = functions.https.onRequest(foobar);
