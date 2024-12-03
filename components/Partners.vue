<script setup lang="ts">
import bnw from "../public/Partners/bmw.png";
import cib from "../public/Partners/CIBbank.png";
import huawei from "../public/Partners/huawei.png";
import nasa from "../public/Partners/nasa.png";

const images = [bnw, cib, huawei, nasa];


</script>

<template>
  <NuxtMarquee >
    <img v-for="image in images" :src="image" alt="" class="mx-2 bg-cover w-80">
  </NuxtMarquee>
</template>

<style scoped></style>
