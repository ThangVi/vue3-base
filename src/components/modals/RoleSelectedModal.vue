<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h4>ĐỔI QUYỀN TRUY CẬP</h4>
        </slot>
        <button type="button" class="btn-close" @click="close">
          <img src="@/assets/images/icons/icon-x-thin.svg" alt="" />
        </button>
      </header>

      <section class="modal-body">
        <slot name="body"> This is the default body! </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer" />
        <button type="button" class="btn-green" @click="close">
          ĐỔI QUYỀN TRUY CẬP
        </button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { emit, expose }) {
    const close = () => {
      emit("close");
    };

    const test = () => {
      alert("11111111111");
    };

    expose({ test });

    return {
      close,
    };
  },
});
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  min-width: 500px;
  border-radius: 20px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  h4 {
    color: #0d0c21;
    font-size: 16px;
    line-height: 19px;
    margin: 0;
    padding-left: 10px;
  }
  justify-content: space-between;
  align-items: center;
}

.modal-footer {
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

.modal-body {
  position: relative;
  padding: 20px 25px;
}

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

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
