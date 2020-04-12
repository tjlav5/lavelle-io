import * as React from "react";
import { useMessaging } from "reactfire";

function useRegisteredMessaging() {
  const messaging = useMessaging();
  const [isRegistered, setIsRegistered] = React.useState(false);

  return (() => {
    if (!isRegistered) {
      try {
        messaging.usePublicVapidKey(
          "BIjM8Qxoxk9ztC1cXOto4o5P9hUhY9VSLGWnVBBKO3R03nDLG9iWUjuAyy9X_BBHtfuVbBONUcsl7r46A5qx_wU"
        );
      } catch (e) {
        // Swallow multiple calls to usePublicVapidKey-error
      }
      setIsRegistered(true);
    }

    return messaging;
  })();
}

export function useToken() {
  const messaging = useRegisteredMessaging();
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function getToken() {
      setToken(await messaging.getToken());
    }
    getToken();
  }, [messaging]);

  return token;
}
