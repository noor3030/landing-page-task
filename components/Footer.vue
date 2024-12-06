<script setup lang="ts"></script>

<template>
  <div class="bg-primary p-6 flex flex-col space-y-20">
    <div class="text-center text-white text-xl flex flex-col space-y-8">
      <h1>What are you waiting for ?</h1>
      <p class="text-base font-extralight">
        Register now to get the best delivery experience for you and your
        clients in Iraq!
      </p>
    </div>
    <div class="flex flex-col space-y-2">
      <input
        type="email"
        placeholder="Your email"
        class="w-full rounded-3xl py-2.5"
      />
      <button class="bg-black text-white w-full rounded-3xl py-2.5">
        register now
      </button>
    </div>
    <div>
      <img src="../public/logo/logo.png" alt="logo" class="w-20 mb-6" />
      <div class="flex text-white w-full justify-between content-between">
        <div class="flex flex-col space-y-4 text-left">
          <h1>The company</h1>
          <p class="font-extralight">Who are we</p>
          <p class="font-extralight">Services</p>
          <div class="flex items-center font-extralight">
            Jobs
            <p class="bg-primary px-2.5 text-sm rounded-xl ml-2">12</p>
          </div>
          <p class="font-extralight">Branches</p>
        </div>
        <div class="flex flex-col space-y-4 text-right">
          <h1>Help center</h1>
          <p class="font-extralight">Common questions</p>
          <p class="font-extralight">Contact us</p>
          <p class="font-extralight">Register as merchant</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-1/2 space-y-2">
      <div
        class="bg-[#FFFFFF3D] p-1 rounded-3xl flex items-center text-white space-x-2"
      >
        <div class="bg-white w-fit rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            style="fill: #7d4283"
          >
            <path
              d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"
            ></path>
          </svg>
        </div>
        <p class="text-[12px]">Facebook</p>
      </div>
      <div
        class="bg-[#FFFFFF3D] p-1 rounded-3xl flex items-center text-white space-x-2"
      >
        <div class="bg-white w-fit rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 26 26"
            style="fill: #7d4283"
          >
            <path
              d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"
            ></path>
          </svg>
        </div>
        <p class="text-[12px]">Instagram</p>
      </div>
      <div
        class="bg-[#FFFFFF3D] p-1 rounded-3xl flex items-center text-white space-x-2"
      >
        <div class="bg-white w-fit rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            style="fill: #7d4283"
          >
            <path
              d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
            ></path>
          </svg>
        </div>
        <p class="text-[12px]">Linkedin</p>
      </div>
    </div>

    <div class="text-[14px] font-extralight text-white text-center">© 2024 Leader Express Delivery Company. All rights reserved.</div>
  </div>
</template>
