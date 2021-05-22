<demo>
常规使用
</demo>

<template>
  <Dialog v-model:visible="x" :closeOnclickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行文字</p>
      <p>第二行文字</p>
    </template>
  </Dialog>
  <Button @click="toggle">弹框</Button>
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

    };
    const f2 = () => {

    };
    return {x, toggle, f1, f2};
  }
};
</script>