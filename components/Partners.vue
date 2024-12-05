<script setup lang="ts">
import bnw from "../public/Partners/bmw.png";
import cib from "../public/Partners/CIBbank.png";
import huawei from "../public/Partners/huawei.png";
import nasa from "../public/Partners/nasa.png";

const images = [bnw, cib, huawei, nasa];
</script>

<template>
  <div class="text-center flex flex-col space-y-4">
    <h1
      class=" text-white font-extralight text-2xl"
    >
      Our partners
    </h1>
    <NuxtMarquee>
      <img
        v-for="image in images"
        :src="image"
        alt=""
        class="mx-2 bg-cover w-80"
      />
    </NuxtMarquee>
  </div>
</template>

<style scoped></style>
