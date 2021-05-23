<template>
  <h1>Radio 组件</h1>
  <Demo :component="Radio1Demo"/>
  <Demo :component="Radio2Demo"/>
</template>


<script lang="ts">
import Demo from './Demo.vue';
import Radio1Demo from './demo-code/RadioDemo/Radio1-demo.vue';
import Radio2Demo from './demo-code/RadioDemo/Radio2-demo.vue';

export default {
  name: 'RadioDemo',
  components: {
    Demo
  },
  setup() {
    return {Radio1Demo, Radio2Demo};
  }
};
</script>