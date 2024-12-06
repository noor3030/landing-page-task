<script setup lang="ts"></script>

<template>
  <div class="flex flex-col space-y-16">
    <div class="px-4 flex flex-col space-y-16">
      <Banner />
      <Partners />
    </div>
    <div class="relative">
      <img src="/Lines.svg" alt="" class="w-full h-auto object-cover" />
      <div class="absolute top-1 left-0 right-0 flex flex-col space-y-16">
        <AboutUs />
        <Services />
        <Philosophy />
        <Charts />
        <News />
        <Pricings />
        <div class="flex flex-col space-y-96">
          <Clients />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
