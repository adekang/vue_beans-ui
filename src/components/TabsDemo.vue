<template>
  <h1>TAB 案例</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航1">示例一</Tab>
    <Tab title="导航2">示例二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tab, Tabs},
  setup() {
    const x = ref('导航1');

    return {x};
  }
};
</script>