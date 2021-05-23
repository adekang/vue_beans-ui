<demo>
禁用Radio
</demo>
<template>

  <Radio label="吃饭" v-model:value="selectedValue">吃饭</Radio>
  <Radio label="睡觉" v-model:value="selectedValue" disabled>睡觉</Radio>
  <Radio label="打豆豆" v-model:value="selectedValue">打豆豆</Radio>
</template>


<script lang="ts">
import Radio from '../../../lib/Radio.vue';
import {ref} from 'vue';

export default {
  name: 'RadioDemo',
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('吃饭');

    return {selectedValue};
  }
};
</script>