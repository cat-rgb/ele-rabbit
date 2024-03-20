<template>
    <div>猜你喜欢</div>
    <div flex flex-wrap>
        <div v-for="item in list" :key="item.id" flex flex-col justify-center>
            <img :src="item.icon" alt="">
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script lang='ts' setup>
import {getHomeNew} from "@/request/home"
import {HomeNew} from "./type"
const list = ref<HomeNew[]>([])
const {result} = await getHomeNew({limit: 6})
list.value = result
console.log(result)
</script>

<style scoped>

</style>