<template>
  <h1>Input组件</h1>

  <h2>双向绑定</h2>
  <Input v-model:value="value" placeholder="请输入..."/>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
import {ref} from 'vue';

//TODO input还没有做完，明天继续做
export default {
  components: {Input},
  setup() {

  }
};
</script>