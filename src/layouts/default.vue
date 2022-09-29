<template>
  <div class="wrapper">
    <Header />
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/header";

export default defineComponent({
  name: "DefaultLayout",
  components: { Header },
});
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
}
</style>
