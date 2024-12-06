<script setup lang="ts">
import { ref } from "vue";

const openSection = ref("Pro");

function toggleSection(section: any) {
  openSection.value = openSection.value === section ? null : section;
}

const sections = [
  {
    title: "Intro",
    description:
      "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
    save: "Save $40",
    price: "123$",
    month: 1,
  },
  {
    title: "Base",
    description:
      "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
    save: "Save $40",
    price: "123$",
    month: 1,
  },
  {
    title: "Pro",
    description:
      "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
    save: "Save $40",
    price: "123$",
    month: 1,
  },
  {
    title: "Enterprise",
    description:
      "Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu",
    save: "Save $40",
    price: "123$",
    month: 1,
  },
];
</script>

<template>
  <div
    class="px-4 flex flex-col space-y-4 md:px-8 lg:flex-row lg:justify-between lg:space-y-0 lg:px-20"
  >
    <div class="lg:w-1/2">
      <h1 class="text-center lg:text-left font-bold text-2xl text-white lg:text-[66.99px] lg:leading-snug lg:mb-6">
        Simple pricing for your Business
      </h1>
      <p class="text-description lg:text-left font-extralight text-center lg:text-[18.25px]">
        We have several powerful plans to showcase your business and get
        discoveredas a creative entrepreneurs. Everything you need.
      </p>
    </div>
    <div class="lg:w-1/3">
      <div v-for="section in sections" :key="section.title" class="mb-6">
        <button
          @click="toggleSection(section.title)"
          class="flex justify-between items-center w-full text-[18.34px] p-4"
          :class="
            openSection === section.title
              ? 'bg-primary text-white rounded-tr-xl rounded-tl-xl'
              : 'bg-[#1A1A1A] text-primary rounded-xl'
          "
        >
          <div class="flex space-x-4">
            <div>
              {{ section.title }}
            </div>

            <div
              v-if="openSection === section.title"
              class="bg-white text-primary text-[9.17px] rounded-md p-1 font-extralight items-center flex"
            >
              {{ section.save }}
            </div>
          </div>

          <span
            class="material-icons rounded-full font-extralight text-sm"
            :class="
              openSection === section.title
                ? 'bg-[#FDECFFED]   text-white'
                : 'bg-primary text-white'
            "
          >
            {{
              openSection === section.title
                ? "keyboard_arrow_up"
                : "keyboard_arrow_down"
            }}
          </span>
        </button>
        <transition name="fade">
          <div
            v-if="openSection === section.title"
            class="bg-primary text-white px-4 py-4 rounded-br-xl rounded-bl-xl flex space-y-3 flex-col"
          >
            <p class="text-white text-[12.23px] font-extralight">
              Pro account gives you freedom with uploading HD videos and can
              also meet all your business needs apasih kamu
            </p>
            <div class="flex justify-between">
              <h1 class="text-[18.34px]">
                {{ section.price }}
                <span class="text-[12.23px] font-extralight">/month</span>
              </h1>
              <div class="bg-white text-black text-sm rounded-md p-2">
                try {{ section.month }} months
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
