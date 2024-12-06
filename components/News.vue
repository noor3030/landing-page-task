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
  <div class="px-4 lg:px-20 flex flex-col space-y-8 md:px-8">
    <div class="lg:flex lg:justify-between lg:content-between lg:items-center">
      <h1 class="text-white font-extralight text-2xl text-center lg:text-left">
        News
      </h1>
      <button
        class="bg-primary text-white rounded-3xl p-2.5 px-4 hidden lg:block"
      >
        Show all news
      </button>
    </div>

    <div
      class="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between"
    >
      <div class="flex flex-col space-y-8 lg:w-7/12	">
        <img src="../public/news-images/news1.png" alt="" />
        <div class="flex space-x-2">
          <button class="bg-white rounded-3xl p-2 font-extralight">
            Company
          </button>
          <button class="bg-white rounded-3xl p-2 font-extralight">
            Contrasts
          </button>
        </div>
        <h1 class="text-white text-[18px] font-light lg:text-[32px]">
          We specialize in fostering effective partnerships with supportive
          companies to drive mutual success.
        </h1>
        <p class="text-description text-base font-extralight lg:text-[18px]">
          We are committed to building effective partnerships with supporting
          companies, contributing to the advancement, development, and expansion
          of the sector through diverse capabilities, expertise, and
          technological innovation.
        </p>
      </div>
      <div class="lg:flex lg:flex-col lg:w-1/3 lg:space-y-10">
        <div v-for="item in news">
          <div class="flex space-x-4 ">
            <img :src="item.image" alt="" class="w-28 h-28 lg:w-48 lg:h-48" />
            <div class="flex flex-col space-y-2 lg:space-y-8">
              <h1 class="text-base text-white font-light">{{ item.title }}</h1>
              <div class="flex space-x-2 pb-4">
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
    </div>
    <button class="bg-primary text-white rounded-3xl p-2.5 w-full lg:hidden">
      Show all news
    </button>
  </div>
</template>
