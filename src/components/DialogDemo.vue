<template>
  <div>
    <h1>Dialog组件</h1>
    <Demo :component="Dialog1Demo"/>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './demo-code/DialogDemo/Dialog1-demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo
    };
  }
};
</script>