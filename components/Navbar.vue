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
  <nav class="px-4 py-6">
    <div class="flex justify-between items-center">
      <span
        class="material-icons text-white cursor-pointer"
        @click="toggleDrawer"
        >menu</span
      >
      <img src="../public/logo/logo.png" alt="logo" class="w-20" />
    </div>
    <div
      v-if="isDrawerOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
    >
      <div
        class="fixed left-0 py-6 top-0 w-64 h-full bg-background shadow-lg z-50"
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
