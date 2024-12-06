<script setup lang="ts"></script>

<template>
  <div
    class="flex lg:justify-between lg:content-between lg:items-center lg:px-20"
  >
    <div
      class="flex flex-col space-y-4 text-center lg:text-left lg:w-1/2 lg:space-y-6"
    >
      <h1 class="text-2xl font-bold text-white lg:hidden">
        Transform your business with our
      </h1>
      <h1
        class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple lg:hidden"
      >
        creative marketing solutions!
      </h1>

      <h1 class="font-bold text-white text-[45px] hidden lg:block">
        Transform your business with our
        <span
          class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-pink to-custom-purple"
        >
          creative marketing solutions!
        </span>
      </h1>

      <p class="text-white font-extralight text-sm lg:text-base">
        Welcome to Focus Marketing Solutions! We're a creative team dedicated to
        driving your business forward with innovative marketing strategies. From
        digital marketing to social media management, we're here to help you
        succeed. Let's build something extraordinary together
      </p>
      <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:space-x-4">
        <button
          class="border text-white border-white text-[14px] p-3 px-6 rounded-3xl"
        >
          Contact us
        </button>

        <button class="bg-primary text-white text-[14px] p-3 px-6 rounded-3xl">
          Join us
        </button>
      </div>

      <img
        src="../public/banner/banner3.png"
        alt=""
        class="w-80 brightness-50 hidden lg:block"
      />
    </div>
    <div class="lg:flex flex-col hidden space-y-6">
      <img src="../public/banner/banner1.png" alt="" class="w-[400px]" />
      <img
        src="../public/banner/banner2.png"
        alt=""
        class="w-[200px] brightness-50 rounded-lg"
      />
    </div>
  </div>
</template>
