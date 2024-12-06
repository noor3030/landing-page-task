<script setup lang="ts">
import news2 from "../public/news-images/news2.png";
import news3 from "../public/news-images/news3.png";
import news4 from "../public/news-images/news4.png";

const news = [
  {
    title:
      "We incorporate the formation of public partnerships as a core aspect of our operations.",
    image: news2,
  },
  {
    title:
      "We incorporate the formation of public partnerships as a core aspect of our operations.",
    image: news3,
  },
  {
    title:
      "We incorporate the formation of public partnerships as a core aspect of our operations.",
    image: news4,
  },
];
</script>

<template>
  <div class="px-4 flex flex-col space-y-8 md:px-8">
    <h1 class="text-white font-extralight text-2xl text-center">News</h1>
    <div class="flex flex-col space-y-8">
      <img src="../public/news-images/news1.png" alt="" />
      <div class="flex space-x-2">
        <button class="bg-white rounded-3xl p-2 font-extralight">
          Company
        </button>
        <button class="bg-white rounded-3xl p-2 font-extralight">
          Contrasts
        </button>
      </div>
      <h1 class="text-white text-[18px] font-light">
        We specialize in fostering effective partnerships with supportive
        companies to drive mutual success.
      </h1>
      <p class="text-description text-base font-extralight">
        We are committed to building effective partnerships with supporting
        companies, contributing to the advancement, development, and expansion
        of the sector through diverse capabilities, expertise, and technological
        innovation.
      </p>

      <div v-for="item in news">
        <div class="flex space-x-4">
          <img :src="item.image" alt="" class="w-28 h-28" />
          <div class="flex flex-col space-y-4">
            <h1 class="text-base text-white font-light">{{ item.title }}</h1>
            <div class="flex space-x-2">
              <button class="bg-white rounded-3xl p-1 font-extralight">
                Company
              </button>
              <button class="bg-white rounded-3xl p-1 font-extralight">
                Contrasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="bg-primary text-white rounded-3xl p-2.5 w-full">
      Show all news
    </button>
  </div>
</template>
