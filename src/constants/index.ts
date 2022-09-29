export const BASE_API_URL =
  process.env.VUE_APP_URL_VAS || "http://192.168.10.21:1180/";
export const VUE_APP_SSO_URL =
  process.env.VUE_APP_LOGIN || "https://authen-api.f88test.com/";
export const VUE_APP_USER_PL = process.env.VUE_APP_USER_PL;

export const PUBLIC_LAYOUT = "default";

export const TOKEN_KEY = "AccessToken";
export const CURRENT_SHOP = "currentShop";
export const CURRENT_ROLE = "currentRole";
export const USER_KEY = "User";
export const TOKEN_EXPIRED_DATE_KEY = "Expire";
export const REFRESH_TOKEN_KEY = "RefreshToken";
