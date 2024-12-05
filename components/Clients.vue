<script setup lang="ts">
import { ref } from "vue";
import client1 from "../public/clients-images/avatar1.png";
import client2 from "../public/clients-images/avatar2.png";
import client3 from "../public/clients-images/avatar3.png";

const clients = [
  {
    name: "Jonathan Sweeney",
    description:
      "I love that model. I [used to have to]call all around, and I absolutely love that model that you could save me the time and headache of doing that.",
    image: client1,
  },
  {
    name: "Barbara Cook",
    description:
      "I am so happy with your company.Ever since my insurer switched to you, everything and everybody I've spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!",
    image: client2,
  },
  {
    name: "Mary Rogers",
    description:
      "I just want to thank you for the great job you did during my transition tooxygen. You unraveled all the confusion and the new company is wonderful. ",
    image: client3,
  },
];

const currentIndex = ref(0);

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + clients.length) % clients.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % clients.length;
};
</script>

<template>
  <div class="flex flex-col  bg-primary p-4">
    <h1 class="text-white font-extralight text-2xl text-center">Our clients opinions</h1>
    <div class="relative w-full  h-[400px] flex items-center">
      <div class="overflow-hidden relative rounded-lg">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(client, index) in clients"
            :key="index"
            :class="[
              'flex-shrink-0 w-full bg-black rounded-lg p-4 text-white flex flex-col space-y-4 mr-4 transition-transform duration-500',
              currentIndex === index ? 'scale-105' : 'scale-95',
            ]"
          >
            <img :src="client.image" alt="" class="w-10" />
            <h1 class="font-medium">{{ client.name }}</h1>
            <p class="w-[250px] text-sm">{{ client.description }}</p>
          </div>
        </div>
      </div>

      <button
        @click="next"
        class="absolute t right-0 z-30 mb-14 flex items-end justify-end h-full  cursor-pointer group focus:outline-none"
      >
        <span
          class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-black"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
}
</style>
