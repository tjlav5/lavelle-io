import * as React from "react";
import { useMessaging } from "reactfire";

export const MessageMe: React.FC = () => {
  const messaging = useMessaging();
  const [token, setToken] = React.useState("");
  const [message, setMessage] = React.useState("");

  try {
    messaging.usePublicVapidKey(
      "BIjM8Qxoxk9ztC1cXOto4o5P9hUhY9VSLGWnVBBKO3R03nDLG9iWUjuAyy9X_BBHtfuVbBONUcsl7r46A5qx_wU"
    );
  } catch (e) {
    console.log({ e });
  }

  // console.log({ messaging });

  messaging
    .getToken()
    .then(currentToken => {
      if (currentToken) {
        console.log({ currentToken }, currentToken);
        setToken(currentToken);
        // sendTokenToServer(currentToken);
        // updateUIForPushEnabled(currentToken);
      } else {
        // Show permission request.
        console.log(
          "No Instance ID token available. Request permission to generate one."
        );
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
      }
    })
    .catch(err => {
      console.log("An error occurred while retrieving token. ", err);
      // showToken('Error retrieving Instance ID token. ', err);
      // setTokenSentToServer(false);
    });

  // Callback fired if Instance ID token is updated.
  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then(refreshedToken => {
        console.log("Token refreshed.");
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        // setTokenSentToServer(false);
        // Send Instance ID token to app server.
        // sendTokenToServer(refreshedToken);
        // ...
      })
      .catch(err => {
        console.log("Unable to retrieve refreshed token ", err);
        // showToken('Unable to retrieve refreshed token ', err);
      });
  });

  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    setMessage(JSON.stringify(payload));
    // ...
  });

  return (
    <div>
      <p>Messaging Token</p>
      <p>{token}</p>
      <p>Message</p>
      <p>{message}</p>
    </div>
  );
};
