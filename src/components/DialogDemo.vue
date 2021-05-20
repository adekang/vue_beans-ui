<template>
  <h1>Dialog组件</h1>
  <Dialog v-model:visible="x">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行文字</p>
      <p>第二行文字</p>
    </template>
  </Dialog>
  <Button @click="toggle" :closeOnclickOverlay="false" :ok="f1" :cancel="f2">弹框</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
    };
    return {x, toggle, f1, f2};
  }
};
</script>