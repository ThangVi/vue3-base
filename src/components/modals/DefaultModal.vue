<template>
  <div>
    <div @click="showModal">
      <slot name="openModal">Open Modal</slot>
    </div>

    <a-modal v-model:visible="visible" class="modal--roles">
      <template #title>
        <h4>ĐỔI QUYỀN TRUY CẬP</h4>
      </template>

      <template #closeIcon>
        <button type="button" class="btn-close" @click="handleClose">
          <img src="@/assets/images/icons/icon-x-thin.svg" alt="" />
        </button>
      </template>

      <div
        v-for="(position, index) in userInfo.PositionOrganization"
        :key="index"
      >
        <div class="title-position">{{ position.Organization.NameV2 }}</div>

        <a-radio-group v-model:value="selectedRole">
          {{ JSON.stringify(userInfo) }}

          <div v-for="role in position.Roles" :key="role.Id">
            <a-radio
              :value="position.Organization.CodeV2 + '-' + role.Code"
              class="ml-2 mt-1 mb-1"
            >
              {{ role.Name }}
            </a-radio>
          </div>
        </a-radio-group>
      </div>
      <template #footer>
        <a-button type="button" class="btn-green" @click="clickConfirm">
          ĐỔI QUYỀN TRUY CẬP
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch, reactive, ref } from "vue";
import { useStore } from "vuex";

import TokenService from "@/helpers/token";
import { PositionOrganization, Organization } from "@/models/interfaces";

export default defineComponent({
  setup() {
    const store = useStore();
    const userInfo = reactive(store.getters["userInfo/getUserInfo"]);
    const visible = ref<boolean>(false);
    const selectedRole = ref("");

    const roleValue = computed(() => {
      return (
        store.getters["userInfo/getCurrentShop"]?.CodeV2 +
        "-" +
        store.getters["userInfo/getCurrentRole"]
      );
    });

    watch(
      roleValue,
      (newVal: string) => {
        selectedRole.value = newVal;
      },
      {
        deep: true,
        immediate: true,
      }
    );

    const showModal = () => {
      visible.value = true;
    };

    const clickConfirm = async () => {
      const arrDataSelected = selectedRole.value.split("-");
      const currentRole = TokenService.getCurrentRole();
      const currentShop = TokenService.getCurrentShop();

      if (
        currentRole != arrDataSelected[1] ||
        currentShop.CodeV2 != arrDataSelected[0]
      ) {
        let shopSelected = {} as Organization;
        userInfo.PositionOrganization?.forEach((item: PositionOrganization) => {
          if (item.Organization.CodeV2 == arrDataSelected[0]) {
            shopSelected = item.Organization;
          }
        });

        await store.dispatch("userInfo/getShopForUser", shopSelected);
        TokenService.setCurrentShop(shopSelected);

        await store.dispatch("userInfo/getRoleForUser", arrDataSelected[1]);
        TokenService.setCurrentRole(arrDataSelected[1]);
        handleClose();
        setTimeout(() => {
          location.reload();
        }, 500);
      } else {
        handleClose();
      }
    };

    const handleClose = () => {
      visible.value = false;
    };

    return {
      visible,
      userInfo,
      selectedRole,

      showModal,
      clickConfirm,
      handleClose,
    };
  },
});
</script>

<style lang="scss">
.modal--roles {
  .ant-modal-content {
    border-radius: 20px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 50%);
    overflow: hidden;
  }
  .ant-modal-header,
  .ant-modal-footer {
    border-bottom: none;
    border-top: none;
  }
  .ant-modal-header {
    padding: 15px !important;
    h4 {
      color: #0d0c21;
      font-size: 16px;
      line-height: 28px;
      margin: 0;
      padding-left: 10px;
    }
    justify-content: space-between;
    align-items: center;
  }

  .ant-modal-body {
    max-height: 550px;
    overflow-y: scroll;
    padding-top: 12px;
    > div {
      margin-bottom: 10px;
    }
    .title-position {
      font-size: 14px;
      padding: 0 0 10px;
      margin-bottom: 5px;
      border-bottom: 1px solid #00833e;
    }
  }

  .ant-modal-footer {
    flex-direction: column;
    justify-content: flex-end;
    button {
      width: 100%;
      background: linear-gradient(90deg, #00833e 52.54%, #007d67);
      border-radius: 100px;
      padding: 10px 30px;
      text-transform: uppercase;
      color: #fff;
      justify-content: center;
      font-size: 13px;
      line-height: 16px;
      cursor: pointer;
    }
  }

  .ant-modal-close {
    .ant-modal-close-x {
      display: flex;
      justify-content: center;
      align-items: center;
      .btn-close {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #e8e8e8;
        border: none;
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 0;
        cursor: pointer;
      }
    }
  }
}
</style>
