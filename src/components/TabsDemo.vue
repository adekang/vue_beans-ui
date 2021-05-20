<template>
  <h1>TAB 案例</h1>
  <Tabs>
    <Tab title="导航1">示例一</Tab>
    <Tab title="导航2">示例二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default {
  components: {Tab, Tabs}
};
</script>