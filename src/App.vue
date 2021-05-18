<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup() {
    let asideVisible = ref(true);
    provide('asideVisible', asideVisible);
  }
};
</script>

<style>

</style>
