<template>
  <component :is="layout">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, watch, nextTick, ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import _ from "lodash";

import { PUBLIC_LAYOUT } from "@/constants";
import TokenService from "@/helpers/token";
import {
  UserInfo,
  Role,
  PositionOrganization,
  Organization,
} from "@/models/interfaces";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    let instanceRole = reactive({}) as Role;
    let instanceShop = reactive({}) as Organization;
    const changeStore = ref<boolean>(false);
    window.addEventListener("storage", () => {
      changeStore.value = true;
    });

    // window.onmessage = (event) => {
    //   if (event?.currentTarget?.localStorage?.AccessToken?.length) {
    //     changeStore.value = true;
    //   }
    // };

    nextTick(() => {
      setTimeout(() => {
        const userInfo = store.getters["userInfo/getUserInfo"];

        if (_.isEmpty(userInfo)) {
          getUserInfo();
        }
      }, 1500);
    });

    watch(
      () => changeStore,
      () => {
        getUserInfo();
      }
    );

    const getUserInfo = async () => {
      try {
        // await store.dispatch("userService/getHddID");
        const res = await store.dispatch("userInfo/getUserInfo");
        const userInfo = reactive<UserInfo>(res);

        TokenService.setUserInfo(userInfo);

        if (userInfo && userInfo.Profile) {
          getCommonData(userInfo);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const getCommonData = async (userInfo: UserInfo) => {
      if (userInfo && userInfo.Agents) {
        try {
          const arrRole: string[] = [];
          const localstorageShopCode = TokenService.getCurrentShop();
          const localstorageRole = TokenService.getCurrentRole();

          userInfo?.Roles.forEach((role: Role) => {
            arrRole.push(role.Code);
          });

          await store.dispatch("userInfo/getPointForUser", {
            userCode: userInfo?.Profile?.EmployeeCode || "",
            Id: userInfo?.Profile?.Id || "",
            Role: arrRole.join(",") || "",
          });

          if (!_.isEmpty(localstorageShopCode)) {
            await store.dispatch(
              "userInfo/getShopForUser",
              localstorageShopCode
            );
          } else {
            instanceShop = {} as Organization;

            userInfo?.PositionOrganization?.forEach(
              (roles: PositionOrganization) => {
                roles.Roles.forEach((role: Role) => {
                  if (role.Code === "CVKD") {
                    instanceShop = roles.Organization;
                    return false;
                  } else {
                    return true;
                  }
                });
              }
            );

            if (_.isEmpty(instanceShop)) {
              userInfo?.PositionOrganization?.forEach(
                (roles: PositionOrganization) => {
                  roles.Roles.forEach((role: Role) => {
                    if (role.Code === "TPGD") {
                      instanceShop = roles.Organization;
                      return false;
                    } else {
                      return true;
                    }
                  });
                }
              );
            }

            console.log(
              "=___________________> ",
              instanceShop,
              _.isEmpty(instanceShop)
            );

            await store.dispatch(
              "userInfo/getShopForUser",
              !_.isEmpty(instanceShop)
                ? instanceShop
                : userInfo?.PositionOrganization[0].Organization
            );

            TokenService.setCurrentShop(
              !_.isEmpty(instanceShop)
                ? instanceShop
                : userInfo?.PositionOrganization[0].Organization
            );
          }

          if (localstorageRole) {
            await store.dispatch("userInfo/getRoleForUser", localstorageRole);
          } else {
            instanceRole = {} as Role;
            userInfo?.PositionOrganization?.forEach(
              (roles: PositionOrganization) => {
                roles.Roles.forEach((role: Role) => {
                  if (role.Code === "CVKD") {
                    instanceRole = role;
                    return false;
                  } else {
                    return true;
                  }
                });
              }
            );
            if (_.isEmpty(instanceRole)) {
              userInfo?.PositionOrganization?.forEach(
                (roles: PositionOrganization) => {
                  roles.Roles.forEach((role: Role) => {
                    if (role.Code === "TPGD") {
                      instanceRole = role;
                      return false;
                    } else {
                      return true;
                    }
                  });
                }
              );
            }
            await store.dispatch(
              "userInfo/getRoleForUser",
              !_.isEmpty(instanceRole)
                ? instanceRole?.Code
                : userInfo?.PositionOrganization[0].Roles[0].Code
            );
            TokenService.setCurrentRole(
              !_.isEmpty(instanceRole)
                ? instanceRole?.Code
                : userInfo?.PositionOrganization[0].Roles[0].Code
            );
          }
        } catch (err: any) {
          // alertError(err?.response?.data ?? err?.message);
        }
      } else {
        // router.push("/error-403");
      }
    };

    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
