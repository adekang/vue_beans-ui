<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside :class="{visible:toggleAside}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>

        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},

  setup() {
    const toggleAside = inject<Ref<boolean>>('asideVisible');
    return {toggleAside};
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/var";

$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100vh;

  > .nav {
    flex-shrink: 1;
  }

  > .content {
    flex-grow: 1;
    padding-top: 100px;
    padding-left: 300px;
    padding-right: 50px;
    @media (max-width: 500px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    overflow: auto;
    padding: 16px;
  }
}

aside {
  position: fixed;
  top: 0;
  left: 0;
  background: $beansBg;
  width: 250px;
  padding: 70px 0 16px 0;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  height: 100%;
  z-index: $aside-index;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid #e8e8e8;
  padding-bottom: 32px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  &::-webkit-scrollbar-corner {
    background: #bfbfbf;
  }

  > h2 {
    margin-bottom: 4px;
    line-height: 22px;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
  }

  > ol {
    > li {
      position: relative;
      width: 100%;
      font-size: 14px;

      > a {
        padding: 12px 20px;
        display: block;
        text-decoration: none;
        color: #333;

        &:hover {
          background: $beansYellow;
          border-bottom: none;
        }
      }

      .router-link-active {
        background-color: $beansYellow;
        border-right: none;

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          border-right: 3px solid $beansDeepYel;
        }
      }
    }
  }
}

main {
  overflow: auto;
}

@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;

      > aside {
        width: 180px;
        background-color: white;
        transition: all 250ms ease;
        transform: translateX(-200px);

        &.visible {
          transform: translateX(0px);
        }
      }
    }
  }
}
</style>