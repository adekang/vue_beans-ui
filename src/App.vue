<template>
  <router-view/>
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',

  setup() {
    const width = document.documentElement.clientWidth;

    let asideVisible = ref(width > 500);
    provide('asideVisible', asideVisible);
  }
};
</script>

<style>

</style>
