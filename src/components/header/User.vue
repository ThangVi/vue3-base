<template>
  <div class="user">
    <a-dropdown :trigger="['click']">
      <template #overlay>
        <a-menu>
          <a-menu-item key="1" @click="openRoleSelectedModal">
            <user-switch-outlined />
            Đổi quyền truy cập
          </a-menu-item>
          <a-menu-item key="2">
            <DefaultModal>
              <template #openModal><retweet-outlined /> Đổi mật khẩu</template>
            </DefaultModal>
          </a-menu-item>
          <a-menu-item key="3">
            <logout-outlined />
            Đăng xuất
          </a-menu-item>
        </a-menu>
      </template>
      <div>
        <div class="user_custom">
          <div>
            <h4>Vi Tất Thắng</h4>
            <span>1194 đường láng</span>
          </div>
          <DownOutlined />
        </div>
      </div>
    </a-dropdown>
  </div>
  <RoleSelectedModal
    v-if="isShowRoleSelectModal"
    @close="closeRoleSelectedModal"
    ref="abc"
  />
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent, ref } from "vue";
import {
  DownOutlined,
  UserSwitchOutlined,
  RetweetOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
import RoleSelectedModal from "@/components/modals/RoleSelectedModal.vue";
import DefaultModal from "@/components/modals/DefaultModal.vue";

export default defineComponent({
  components: {
    DownOutlined,
    UserSwitchOutlined,
    RetweetOutlined,
    LogoutOutlined,
    RoleSelectedModal,
    DefaultModal,
  },

  setup() {
    const isShowRoleSelectModal = ref<boolean>(false);
    const abc = ref<null | InstanceType<typeof RoleSelectedModal>>();

    const onClick: MenuProps["onClick"] = ({ key }) => {
      console.log(`Click on item ${key}`);
    };

    const openRoleSelectedModal = () => {
      console.log("abc ", abc);

      isShowRoleSelectModal.value = true;
    };

    const closeRoleSelectedModal = () => {
      isShowRoleSelectModal.value = false;
    };

    return {
      isShowRoleSelectModal,
      onClick,
      openRoleSelectedModal,
      closeRoleSelectedModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.user {
  justify-content: flex-end;
  cursor: pointer;
  &_custom {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 64px;
    padding: 8px 0;
    > div {
      text-align: left;
      margin-right: 15px;
      line-height: 2;
      h4 {
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        margin: 0;
        padding-top: 10px;
      }
      span {
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        padding-bottom: 10px;
      }
    }
    > span {
      line-height: 40px;
    }

    svg {
      margin-top: 5px;
      margin-left: 5px;
    }
  }
  >>> .point {
    &::after {
      content: none;
    }
  }
}
</style>
