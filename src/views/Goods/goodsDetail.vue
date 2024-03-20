<template>
    <div>
        <div>
            <el-button @click="router.back()">
                <el-icon>
                    <ArrowLeftBold />
                </el-icon>
            </el-button>
            <span>商品详情</span>

        </div>
        <div>
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in results.mainPictures" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { getGoodsDetail } from "@/request/home"
import { GoodsDetail, Brand, Spec, Value, Sku, Spec2, Category, Parent, Details, Property, SimilarProduct, HotByDay } from "./goods"
import { useRoute, useRouter } from "vue-router"
const router = useRouter()
const route = useRoute()
console.log(route)
const list = ref([])
const mainPictures = ref([])
const results: Ref<GoodsDetail> = ref()


onBeforeMount(async () => {
    const { result } = await getGoodsDetail<GoodsDetail>({ id: route.query.id })
    results.value = result
})

</script>

<style scoped></style>