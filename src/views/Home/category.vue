<template>
    <div flex flex-wrap justify-around bg-zinc-300>
        <div v-for="item in list" :key="item.id" flex flex-col justify-center>
            <img :src="item.icon" alt="">
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script lang='ts' setup>
import {getHomeCategory} from "@/request/home"
import {Category} from "./type"
const list = ref<Category[]>([])
const {result} = await getHomeCategory()
list.value = result
console.log(result)
</script>

<style scoped>

</style>