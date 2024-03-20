<template>
    <div text-center>猜你喜欢</div>
    <div flex flex-wrap justify-around>
        <div v-for="item in list" :key="item.id" flex flex-col justify-center class="basis-2/5" @click="goPage(item)" v-infinite-scroll="load">
            <img class="w-full":src="item.picture" alt="">
            <div>
                <p>{{ item.name }}</p>
                <p color-red>{{ item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import {getHomeLike} from "@/request/home"
import {GoodsGuess, GoodsItem} from "./type"
import { useRouter } from "vue-router";

const router = useRouter()
const page = ref(1)
const pageSize = ref(6)
const list = ref<GoodsItem[]>([])



const getGoods = async () => {
    const {result} = await getHomeLike<GoodsGuess>({page: page.value, pageSize: pageSize.value})
    list.value = list.value.concat(result.items)
}

const load = () => {
    page.value += 1
    getGoods()
}

const goPage = (item: GoodsItem) => {
    router.push({path: 'goodsDetail', query: {id: item.id}} )
}

onBeforeMount(() => {
    getGoods()
})


</script>

<style scoped>

</style>