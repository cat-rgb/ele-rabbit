<template>
  <div class="container"  w-screen h-screen>
    <el-menu>
    <el-menu-item v-for="item in menuList" :index="item.path" :key="item.path" @click="goPage(item)">{{ item.title }}</el-menu-item>
  </el-menu>
  <div class="content">
    <router-view></router-view>
  </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import { useRouter } from "vue-router";
const router  = useRouter()
const menuList = ref([
    {
        title: '首页',
        icon: 'el-icon-s-home',
        path: '/home'
    },
    {
        title: '文章',
        icon: 'el-icon-s-order',
        path: '/home'
    },
    {
        title: '标签',
        icon: 'el-icon-s-flag',
        path: "/home"
    }
])

const goPage = (item: any) => {
  console.log(123)

  router.push(item.path)
}
</script>

<style scoped lang="scss">
.el-menu {
  width: 85px;
}
.container {
  display: flex;
  flex-direction: row;
  .content {
    overflow: auto;
    flex: 1;
  }
}
</style>