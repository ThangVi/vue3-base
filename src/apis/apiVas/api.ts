import Axios from "axios";
import { BASE_API_URL } from "@/constants";
import interceptors from "./interceptors";

const ApiCaller = Axios.create({
  baseURL: BASE_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // request timeout
  timeout: 120000,
});

interceptors.setup(ApiCaller);
interceptors.checkToken(ApiCaller);

export default ApiCaller;
