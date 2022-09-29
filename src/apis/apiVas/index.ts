import API from "./api";
import { END_POINTS } from "@/helpers/endpoints";

export default {
  getPointForUser(payload: any) {
    try {
      return API.get(END_POINTS.GET_POINT_FOR_USER, {
        params: payload,
      }).then((response: { data: any }) => response?.data);
    } catch (error: any) {
      return error.data;
    }
  },
};
