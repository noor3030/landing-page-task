<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const counters = [
  {
    title: "Branches",
    number: 20,
  },
  {
    title: "Clients",
    number: 1200,
  },
  {
    title: "Sales Representative",
    number: 315,
  },
  {
    title: "Number of Employees",
    number: 200,
  },
];

const obj1 = ref(0);
const obj2 = ref(0);
const obj3 = ref(0);
const obj4 = ref(0);

// Animation function
function animateValue(
  obj: { value: number },
  start: number,
  end: number,
  duration: number
) {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.value = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Intersection Observer callback
function handleIntersection(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateValue(obj1, 0, counters[0].number, 5000);
      animateValue(obj2, 0, counters[1].number, 5000);
      animateValue(obj3, 0, counters[2].number, 5000);
      animateValue(obj4, 0, counters[3].number, 5000);
      observer?.disconnect(); // Stop observing after triggering
    }
  });
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const target = document.querySelector(".counter-section");
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });
  if (target) {
    observer.observe(target);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="flex flex-col space-y-4 px-4 text-left">
    <ul class="list-disc px-4 border-b border-b-white pb-2">
      <li class="text-primary text-left">The company's philosophy</li>
    </ul>
    <h1 class="text-3xl text-primary">
      We bear the responsibility of developing the sector.
    </h1>
    <p class="text-base text-description font-extralight">
      Elevate your brand with our comprehensive marketing solutions, including
      Digital Marketing, Content Creation, and Social Media Strategy. Enhance
      visibility through expert SEO and PPC management,
    </p>
    <div class="grid grid-cols-2 gap-5 counter-section">
      <div v-for="(counter, index) in counters" :key="index">
        <h1 class="text-[27px] text-white font-extralight">
          {{
            index === 0 ? obj1 : index === 1 ? obj2 : index === 2 ? obj3 : obj4
          }}
          +
        </h1>
        <h1 class="mt-4 text-[18px] text-description">
          {{ counter.title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: disc;
}

ul li::marker {
  color: #fff;
}
</style>
