/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\laragon\\www\\ComponentDocumentation\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-52eef96c",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-52eef96c").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-4014f6f4",
    path: "/components/Dashboard.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4014f6f4").then(next)
    },
  },
  {
    name: "v-98e0ed38",
    path: "/components/btn.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-98e0ed38").then(next)
    },
  },
  {
    name: "v-28ef0e24",
    path: "/components/DragBox.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-28ef0e24").then(next)
    },
  },
  {
    name: "v-7d378f1e",
    path: "/components/ticket.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7d378f1e").then(next)
    },
  },
  {
    name: "v-53a283ed",
    path: "/game/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-53a283ed").then(next)
    },
  },
  {
    path: "/game/index.html",
    redirect: "/game/"
  },
  {
    name: "v-b80bdf66",
    path: "/pages/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b80bdf66").then(next)
    },
  },
  {
    path: "/pages/index.html",
    redirect: "/pages/"
  },
  {
    name: "v-79eb2f3e",
    path: "/components/home.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-79eb2f3e").then(next)
    },
  },
  {
    name: "v-1ae1d77c",
    path: "/pages/ticket.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1ae1d77c").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-322cf816",
    path: "/tag/svg/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-322cf816").then(next)
    },
    meta: {"pid":"tags","id":"svg"}
  },
  {
    path: "/tag/svg/index.html",
    redirect: "/tag/svg/"
  },
  {
    name: "v-323c7a06",
    path: "/tag/btn/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-323c7a06").then(next)
    },
    meta: {"pid":"tags","id":"btn"}
  },
  {
    path: "/tag/btn/index.html",
    redirect: "/tag/btn/"
  },
  {
    name: "v-151c8dde",
    path: "/tag/drag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-151c8dde").then(next)
    },
    meta: {"pid":"tags","id":"drag"}
  },
  {
    path: "/tag/drag/index.html",
    redirect: "/tag/drag/"
  },
  {
    name: "v-c1e2ae8e",
    path: "/tag/ticket/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-c1e2ae8e").then(next)
    },
    meta: {"pid":"tags","id":"ticket"}
  },
  {
    path: "/tag/ticket/index.html",
    redirect: "/tag/ticket/"
  },
  {
    name: "v-acfe980a",
    path: "/categories/components/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-acfe980a").then(next)
    },
    meta: {"pid":"categories","id":"components"}
  },
  {
    path: "/categories/components/index.html",
    redirect: "/categories/components/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]