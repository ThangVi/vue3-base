<template>
  <a-layout-header>
    <div class="navbar">
      <div class="logo">
        <router-link to="/dashboard">
          <a-image :width="114" :src="img" :preview="false" />
        </router-link>
      </div>
      <Menu />
    </div>
    <div class="user-info">
      <User />
    </div>
  </a-layout-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import img from "@/assets/images/logo.png";
import Menu from "./Menu.vue";
import User from "./User.vue";

export default defineComponent({
  components: {
    Menu,
    User,
  },

  setup() {
    const current = ref(["dashboard"]);
    return {
      current,
      img,
    };
  },
});
</script>

<style lang="scss" scoped>
.ant-layout-header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  .logo {
    margin-right: 20px;
  }
  .navbar {
    display: flex;
  }
  .user-info {
    display: flex;
  }
}

.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #fff;
}
</style>
