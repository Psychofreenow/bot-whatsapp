import { env } from "@config/env";

export const serverConfig = () => {
  const { PORT: port, VERIFY_TOKEN: verifyToken } = env;
  console.log(`Listening on port ${port}`);
  console.log("VERIFY_TOKEN:", verifyToken ? "OK" : "MISSING");
};
