<script setup lang="ts"></script>

<template>
  <div class="flex flex-col space-y-10">
    <div class="px-4 flex flex-col space-y-10">
      <Banner />
      <Partners />
    </div>
    <div class="relative">
      <img src="/Lines.svg" alt="" class="w-full h-auto object-cover" />
      <div
        class="absolute top-1 left-0 right-0 flex flex-col space-y-10 "
      >
        <AboutUs />
        <Services />
        <Philosophy />
        <Charts />
      </div>
    </div>


  </div>
</template>
