import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  VERIFY_TOKEN: process.env.VERIFY_TOKEN || "",
  USER_ACCESS_TOKEN: process.env.USER_ACCESS_TOKEN || "",
  API_WS_VERSION: process.env.API_WS_VERSION || "v22.0",
  RECEIVER_PHONE_NUMBER_ID: process.env.RECEIVER_PHONE_NUMBER_ID || "",
  SENDER_PHONE_NUMBER_ID: process.env.SENDER_PHONE_NUMBER_ID || "",
  URL_BASE_FACEBOOK_GRAPH: process.env.URL_BASE_FACEBOOK_GRAPH || "",
  OPENAI_KEY: process.env.OPENAI_KEY || "",
  DEEPSEEK_KEY: process.env.DEEPSEEK_KEY || "",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  DATABASE_URL: process.env.DATABASE_URL || "",
};
