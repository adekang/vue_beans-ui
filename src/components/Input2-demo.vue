

<template>
  <Input v-model:value="value" placeholder="请输入..." disabled/>
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