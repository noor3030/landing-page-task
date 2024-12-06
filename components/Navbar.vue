<script setup lang="ts">
import { ref } from "vue";

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Branches", link: "/branches" },
  { name: "Jobs", link: "/jobs", numbers: 12 },
];
</script>

<template>
  <nav class="px-4 py-10 lg:pb-24 lg:px-20">
    <!-- desktop nav -->
    <div class="lg:flex justify-between items-center hidden">
      <img src="../public/logo/logo.png" alt="logo" class="w-24" />
      <ul class="flex space-x-6 items-center font-light text-[14px]">
        <li v-for="page in pages" :key="page.name" class="text-white">
          <nuxt-link :to="page.link" class="flex items-center"
            >{{ page.name }}
            <p
              class="bg-primary px-2.5 text-sm rounded-xl ml-2"
              v-if="page.numbers"
            >
              {{ page.numbers }}
            </p></nuxt-link
          >
        </li>
      </ul>
      <div class="flex space-x-4">
        <button
          class="border text-white border-white text-[14px] p-3 px-6 rounded-3xl"
        >
          Contact us
        </button>

        <button class="bg-primary text-white text-[14px] p-3 px-6 rounded-3xl">
          Join us
        </button>
      </div>
    </div>

    <!-- mobile drawer -->
    <div class="flex justify-between items-center lg:hidden">
      <span
        class="material-icons text-white cursor-pointer"
        @click="toggleDrawer"
        >menu</span
      >
      <img src="../public/logo/logo.png" alt="logo" class="w-20" />
    </div>
    <div
      v-if="isDrawerOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 lg:hidden"
    >
      <div
        class="fixed left-0 py-10 top-0 w-64 h-full bg-background shadow-lg z-50"
      >
        <div class="px-4">
          <span
            class="material-icons cursor-pointer text-white"
            @click="toggleDrawer"
            >close</span
          >
        </div>
        <ul class="px-4">
          <li
            v-for="page in pages"
            :key="page.name"
            class="py-2 text-lg text-white"
          >
            <nuxt-link :to="page.link" class="flex items-center"
              >{{ page.name }}
              <p
                class="bg-primary px-2.5 text-sm rounded-xl ml-2"
                v-if="page.numbers"
              >
                {{ page.numbers }}
              </p></nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
