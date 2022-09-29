import ssoService from "@/apis/apiSSO";
import VasService from "@/apis/apiVas";

export default {
  getUserInfo: async ({ commit }: any) => {
    try {
      const response = await ssoService.getUserInfo();
      console.log("response ", response);

      commit("setUserInfo", response);
      return response;
    } catch (error: any) {
      return error.data;
    }
  },

  getRoleForUser: async ({ commit }: any, role: string) => {
    try {
      commit("setRoleForUser", role);
    } catch (error: any) {
      return error.data;
    }
  },

  getPointForUser: async ({ commit }: any, payload: any) => {
    try {
      const response = await VasService.getPointForUser(payload);
      commit("setPointForUser", response);
      return response;
    } catch (error: any) {
      return error.data;
    }
  },

  getShopForUser: async ({ commit }: any, shopInfo: any) => {
    try {
      commit("setShopForUser", shopInfo);
    } catch (error: any) {
      return error.data;
    }
  },
};
