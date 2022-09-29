import { UserState } from "@/models/interfaces";

const mutations = {
  setUserInfo(state: UserState, info: any) {
    state.userInfo = info;
  },

  setRoleForUser(state: UserState, role: string) {
    state.currentRole = role;
  },

  setPointForUser(state: UserState, point: any) {
    state.point = point;
  },

  setShopForUser(state: UserState, payload: any) {
    state.currentShop = payload;
  },
};

export default mutations;
