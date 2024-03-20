import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/Layout/index.vue"),
    redirect: '/home',
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home/index.vue"),
        name: "Home"
      }
    ]
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router