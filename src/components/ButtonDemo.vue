<template>
  <h1>Button示例</h1>
  <h2>普通按钮</h2>
  <Button> 你好</Button>
  <Button theme="button"> 你好</Button>
  <Button theme="link"> 你好</Button>
  <Button theme="text"> 你好</Button>
  <h2>按钮大小</h2>
  <div>
    <Button size="big">大按钮</Button>
    <Button>中按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button
  },

  setup() {
    const onClick = () => {
      console.log('点击');
    };

    return {onClick};
  }
};
</script>