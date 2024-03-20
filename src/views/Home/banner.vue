<template>
 <el-carousel motion-blur>
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
</template>

<script lang='ts' setup>
import {getHomeBanner} from "@/request/home"
import {HomeBanner} from "./type"
const bannerList = ref<HomeBanner[]>([])
const {result} = await getHomeBanner({distributionSite: '1'})
bannerList.value = result
console.log(result)
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>