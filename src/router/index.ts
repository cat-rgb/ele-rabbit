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
      },
      {
        path: "/goodsDetail",
        component: () => import("@/views/Goods/goodsDetail.vue"),
        name: "GoodsDetail"
      }
    ]
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router