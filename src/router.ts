import {createRouter, createWebHashHistory} from 'vue-router';
import {h} from 'vue';

// 页面引入
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import InputDemo from './components/InputDemo.vue';
import RadioDemo from './components/RadioDemo.vue';
// md文档引入
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';

const history = createWebHashHistory();
const md = (string: any) => h(Markdown, {content: string, key: string});
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'install', component: md(install)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo},
        {path: 'radio', component: RadioDemo},
      ]
    }
  ]
});