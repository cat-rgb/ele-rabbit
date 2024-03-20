<template>
<div flex flex-wrap mt-10>
    <div v-for="item in homeHotList" :key="item.id" class="basis-1/2" mb-10>
        <div flex justify-center>
            <span mr-5>{{ item.title }}</span>
            <span>{{ item.alt }}</span>
        </div>
        <div flex justify-around>
            <img v-for="img in item.pictures" :src="img" :key="img" alt="" class="w-2/5">
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { getHomeHot } from '@/request/home';
import { ref, onBeforeMount } from 'vue';
import {HomeHotInfo} from "./type"
onBeforeMount(async() => {
   
})
const homeHotList = ref<HomeHotInfo[]>([])
const { result} = await getHomeHot()
homeHotList.value = result as HomeHotInfo[]
console.log(result)






</script>

<style scoped lang="scss">
</style>