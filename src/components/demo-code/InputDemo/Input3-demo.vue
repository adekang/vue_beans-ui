<demo>
input大小
</demo>
<template>
  <Input v-model:value="value" placeholder="big input" size="big"/>
  <Input v-model:value="value" placeholder="default input" size="default"/>
  <Input v-model:value="value" placeholder="small input" size="small"/>
</template>

<script lang="ts">
import Input from '../../../lib/Input.vue';
import {ref, defineComponent} from 'vue';

export default defineComponent({
  name: 'Input3Demo',
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

