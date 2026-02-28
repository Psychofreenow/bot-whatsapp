const BASE_URL_FACEBOOK_GRAPH = process.env.URL_BASE_FACEBOOK_GRAPH || "";

const API_WS_VERSION = process.env.API_WS_VERSION || "v22.0";

export const facebookApi = {
  base: `${BASE_URL_FACEBOOK_GRAPH}/${API_WS_VERSION}`,
};
