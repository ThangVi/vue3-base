<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="dashboard">
      <template #icon>
        <home-outlined />
      </template>
      <router-link to="/dashboard"> Trang chủ </router-link>
    </a-menu-item>
    <a-sub-menu key="services">
      <template #icon>
        <appstore-outlined />
      </template>
      <template #title>Giao dịch</template>
      <a-menu-item key="setting:1">
        <router-link to="/service/e-wallet-recharge"> Nạp tiền </router-link>
      </a-menu-item>
      <a-menu-item key="setting:2">
        <router-link to="/service/e-wallet-withdraw"> Rút tiền </router-link>
      </a-menu-item>
      <a-menu-item key="setting:3">
        <router-link to="/service/pay-the-bill">
          Thanh toán hóa đơn
        </router-link>
      </a-menu-item>
      <a-menu-item key="setting:4">
        <router-link to="/service/buy-card"> Nạp tiền điện thoại </router-link>
      </a-menu-item>
      <a-menu-item key="setting:5">
        <router-link to="/service/driver-topup"> Nạp tiền tài xế </router-link>
      </a-menu-item>
      <a-menu-item key="setting:6">
        <router-link to="/service/account-topup">
          Nạp tiền tài khoản
        </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="transaction">
      <template #icon>
        <unordered-list-outlined />
      </template>
      <template #title>Danh sách giao dịch</template>
      <a-menu-item key="alipay">
        <router-link to="/service/transaction-list">
          Danh sách giao dịch
        </router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  HomeOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    HomeOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
  },

  setup() {
    const current = ref(["dashboard"]);
    return {
      current,
    };
  },
});
</script>

<style lang="scss" scoped>
.ant-menu-horizontal {
  border: none;
}
</style>
