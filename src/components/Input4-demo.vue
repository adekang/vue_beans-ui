

<template>
  <h2>双向绑定</h2>
  <Input v-model:value="value" placeholder="请输入数字..."/>
  <div>value:{{ value }}</div>
</template>


<script lang="ts">
import Input from '../lib/Input.vue';
import {ref, defineComponent} from 'vue';

export default defineComponent({
  components: {Input},
  props: {
    value: String
  },
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  }
});
</script>