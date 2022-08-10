<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 @click="increment">
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </h2>
    <h1>{{ store.state.count }}</h1>
    <a-auto-complete
      v-model:value="value"
      :options="options"
      style="width: 200px"
      placeholder="input here"
      @select="onSelect"
      @search="onSearch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

interface MockVal {
  value: string;
}

const mockVal = (str: string, repeat = 1): MockVal => {
  return {
    value: str.repeat(repeat),
  };
};

export default defineComponent({
  setup() {
    const store = useStore();
    const value = ref("");
    const options = ref<MockVal[]>([]);
    const onSearch = (searchText: string) => {
      console.log("searchText");
      options.value = !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    };
    const onSelect = (value: string) => {
      console.log("onSelect", value);
    };
    watch(value, () => {
      console.log("value", value.value);
    });
    const increment = () => store.commit("increment", { amount: 3 });
    return {
      value,
      options,
      onSearch,
      onSelect,
      increment,
      store,
    };
  },
});
</script>
