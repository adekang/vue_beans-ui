<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-beans-icon"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <a href="https://github.com/adekang">
          GitHub
        </a>
      </li>
    </ul>

    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-caidan"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  }
};
</script>


<style lang="scss" scoped>
@import "src/styles/var";

.topnav {
  display: flex;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  justify-content: center;
  align-items: center;
  background-color: $beansBg;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);

  > .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;

      > a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }

  svg {
    width: 32px;
    height: 32px;
  }
}
</style>