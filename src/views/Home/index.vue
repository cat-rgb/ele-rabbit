<template>
<div>
    123
</div>
</template>

<script lang="ts" setup>
import { getHomeHot } from '@/request/api';
import { ref, onBeforeMount } from 'vue';

onBeforeMount(async() => {
    const homeHotList = ref([])
const { result} = await getHomeHot()
homeHotList.value = result
})






</script>

<style scoped lang="scss">
</style>