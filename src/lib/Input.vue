<template>
  <input :placeholder="placeholder"
         type="text"
         :value="title"
         @input="$emit('update:title', $event.target.value)"
  >
</template>

<script lang="ts">
export default {
  props: {
    placeholder: {
      type: String
    },
    title: String

  },
  setup(props, context) {

  }
};
</script>

