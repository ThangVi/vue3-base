import TokenService from "@/helpers/token";

function setup(instance: any) {
  instance.interceptors.request.use(
    function (config: any) {
      const token = TokenService.getToken();
      if (token) {
        config.headers["Authorization"] = `${token}`;
      }

      return config;
    },
    function (erorr: any) {
      return Promise.reject(erorr);
    }
  );
}

function checkToken(instance: any) {
  instance.interceptors.response.use(
    (response: any) => {
      if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    (error: any) => {
      if (error.response.status) {
        return Promise.reject(error);
      }
    }
  );
}

export default {
  setup,
  checkToken,
};
