<template>
  <input :placeholder="placeholder"
         type="text"
         :value="title"
         @input="changeValue"
         :disabled="disabled"
         :class="classes"
         class="beans-input"
  />
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: 'default'
    },
    title: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const {size} = props;
    const changeValue = (e) => {
      context.emit('update:value', e.target.value);
    };
    const classes = computed(() => {
      return {
        [`beans-size-${size}`]: size,
      };
    });
    return {changeValue, classes};
  }
};
</script>

<style lang="scss">
$border-color-hover: #40a9ff;
$box-shadow-color: rgba(64, 169, 255, 0.5);
$border-color: #d9d9d9;

.beans-input {
  height: 32px;
  width: 250px;
  border: 1px solid $border-color;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 14px;
  color: rgba(0, 0, 0, .85);
  transition: all 250ms;

  & + & {
    margin-left: 10px;
  }

  &:hover {
    border-color: $border-color-hover;
  }

  &:focus {
    box-shadow: inset 0 .5px 1px $box-shadow-color;
    outline: none;
  }

  &[disabled] {
    border-color: #bbb;
    color: #bbb;
    cursor: not-allowed;
  }

  &.beans-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px
  }

  &.beans-size-small {
    font-size: 10px;
    height: 24px;
    padding: 0 4px;
  }
}
</style>

