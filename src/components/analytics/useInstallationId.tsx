import * as React from "react";
import { useFirebaseApp } from "reactfire";

function useInstallations() {
  const app = useFirebaseApp();
  return app.installations();
}

export function useInstallationId(): string | null {
  const installations = useInstallations();
  const [installationId, setInstallationId] = React.useState<string | null>(
    null
  );

  React.useEffect(() => {
    async function getId() {
      const id = await installations.getId();
      setInstallationId(id);
    }

    getId();
  });

  installations.onIdChange(id => {
    console.log("changes");
    setInstallationId(id);
  });

  return installationId;
}
