import { UserState } from "@/models/interfaces";

const getters = {
  getUserInfo: (state: UserState) => {
    return state.userInfo;
  },

  getCurrentRole: (state: UserState) => {
    return state.currentRole;
  },

  getCurrentShop: (state: UserState) => {
    return state.currentShop;
  },

  getPoint: (state: UserState) => {
    return state.point;
  },
};

export default getters;
