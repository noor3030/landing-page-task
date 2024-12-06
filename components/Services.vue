<script setup lang="ts">
import branding from "../public/services-images/branding.png";
import content from "../public/services-images/content.png";
import email from "../public/services-images/email.png";
import marketing from "../public/services-images/marketing.png";
import social from "../public/services-images/social.png";
import video from "../public/services-images/video.png";

const services = [
  { title: "Video Making ", image: video, description: "Random content" },
  {
    title: "Branding",
    image: branding,
    description: "Random content to fill the blank space",
  },
  {
    title: "Marketing strategy",
    image: marketing,
    description: "Random content to fill the blank space",
  },
  { title: "Email Marketing", image: email, description: "Random content" },
  {
    title: "Social Media Managing",
    image: social,
    description: "Random content to fill the blank space",
  },
  {
    title: "Content Writing ",
    image: content,
    description: "Random content to fill the blank space",
  },
];
</script>

<template>
  <div class="px-4 space-y-4 lg:space-y-10 text-center flex flex-col">
    <h1 class="text-2xl text-white font-extralight lg:font-light lg:text-[48px]">Our services</h1>
    <p class="text-description font-extralight text-base lg:text-[18px]">
      ransforming your online presence with innovative digital strategies
    </p>

    <div class="grid grid-cols-2 gap-4 lg:grid-cols-3">
      <div
        v-for="service in services"
        class="flex flex-col justify-center items-center text-center space-y-4 lg:space-y-3"
      >
        <div class="bg-white rounded-2xl p-1 w-full md:w-1/2 flex items-center justify-center content-center lg:w-fit">
          <div
            class="bg-primary rounded-full flex justify-center items-center w-32 h-32"
          >
            <img :src="service.image" class="w-16 h-16" />
          </div>
        </div>
        <h1 class="text-white text-[16px] h-8 md:h-fit flex items-center">
          {{ service.title }}
        </h1>
        <p class="text-description text-[14px] h-12 md:h-fit flex items-center">
          {{ service.description }}
        </p>
      </div>
    </div>
  </div>
</template>
