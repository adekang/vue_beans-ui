<demo>
常规使用
</demo>

<template>
  <Input v-model:value="value" placeholder="请输入..."/>
</template>


<script lang="ts">
import Input from '../../../lib/Input.vue';
import {ref, defineComponent} from 'vue';

export default defineComponent({
  name: 'Input1Demo',
  components: {Input},
  props: {
    value: String
  },
  setup() {
    const value = ref('');
    return {
      value,
    };
  }
});
</script>