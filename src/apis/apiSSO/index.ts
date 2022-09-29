import API from "./api";
import { END_POINTS } from "@/helpers/endpoints";

export default {
  getUserInfo() {
    try {
      return API.get(END_POINTS.USER_NAME).then(
        (response: { data: any }) => response?.data
      );
    } catch (error: any) {
      return error.data;
    }
  },
};
