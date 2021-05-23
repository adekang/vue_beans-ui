<demo>
双向绑定
</demo>

<template>
  <Input v-model:value="value" placeholder="请输入数字..."/>
  <div>value:{{ value }}</div>
</template>


<script lang="ts">
import Input from '../../../lib/Input.vue';
import {ref, defineComponent} from 'vue';

export default defineComponent({
  name: 'Input4Demo',
  components: {Input},
  props: {
    value: String
  },
  setup() {
    const value: string = ref('');
    return {
      value,
    };
  }
});
</script>