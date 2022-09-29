import { TOKEN_KEY, CURRENT_SHOP, CURRENT_ROLE, USER_KEY } from "@/constants";
import { UserInfo } from "@/models/interfaces";

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken(accessToken: string) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  getCurrentShop() {
    return JSON.parse(localStorage.getItem(CURRENT_SHOP) || "{}");
  },

  setCurrentShop(currentShop: object) {
    localStorage.setItem(CURRENT_SHOP, JSON.stringify(currentShop));
  },

  getCurrentRole() {
    return localStorage.getItem(CURRENT_ROLE);
  },

  setCurrentRole(role: string) {
    localStorage.setItem(CURRENT_ROLE, role);
  },

  getUserInfo() {
    return JSON.parse(localStorage.getItem(USER_KEY) || "{}");
  },

  setUserInfo(user: UserInfo) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
};

export default TokenService;
