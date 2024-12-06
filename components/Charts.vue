<template>
  <div class="px-4 flex flex-col space-y-4 md:px-8 lg:px-20 lg:space-y-10">
    <h1
      class="text-white font-extralight text-2xl text-center lg:text-left lg:text-[24px]"
    >
      Our Charts
    </h1>
<div class="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between">
    <div class="p-4 bg-[#1E1E1E] rounded-lg shadow-md mb-8 lg:w-[800px] lg:h-fit">
      <div class="pb-4 text-base">
        <h1 class="text-white">Net Profit</h1>
        <p class="text-description font-extralight">2024</p>
      </div>

      <div class="w-full h-[300px] sm:h-[500px] md:h-[600px]">
        <canvas ref="barChartCanvas" class="w-full h-full"></canvas>
      </div>
      <div
        class="mt-4 flex justify-center space-x-4"
        ref="barChartLegend"
      ></div>
    </div>

    <div class="p-4 bg-[#1E1E1E] rounded-lg shadow-md lg:w-[400px] lg:h-fit">
      <div class="pb-4 text-base border-b border-b-[#4F4F4F] mb-4">
        <h1 class="text-white">Primary Text</h1>
        <p class="text-white">5.987,34</p>
        <p class="text-description font-extralight">Secondary text</p>
      </div>

      <div class="w-full">
        <canvas ref="donutChartCanvas" class="w-full h-full"></canvas>
      </div>
      <div
        class="mt-4 flex justify-center space-x-4"
        ref="donutChartLegend"
      ></div>
    </div>
</div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
  Chart,
  BarController,
  DoughnutController,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  DoughnutController,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default defineComponent({
  name: "Charts",
  setup() {
    const barChartCanvas = ref<HTMLCanvasElement | null>(null);
    const donutChartCanvas = ref<HTMLCanvasElement | null>(null);
    const barChartLegend = ref<HTMLDivElement | null>(null);
    const donutChartLegend = ref<HTMLDivElement | null>(null);

    const barChartData = {
      labels: ["Product 1", "Product 2"],
      datasets: [
        {
          label: "Product 1",
          data: [120],
          backgroundColor: "#7D4283",
        },
        {
          label: "Product 2",
          data: [80],
          backgroundColor: "#F3722C",
        },
      ],
    };

    const barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
          grid: {
            borderDash: [5, 5],
            color: "#4F4D4D",
          },
        },
        y: {
          title: {
            display: false,
          },
          ticks: {
            stepSize: 25,
            color: "#fff",
          },
          grid: {
            borderDash: [5, 5],
            color: "#4F4D4D",
          },
          min: 0,
          max: 200,
          beginAtZero: true,
        },
      },
      categoryPercentage: 0.6,
      barPercentage: 0.5,
    };

    const donutChartData = {
      labels: ["Product 1", "Product 2"],
      datasets: [
        {
          label: "Sales",
          data: [50, 50],
          backgroundColor: ["#7D4283", "#F3722C"],
          borderWidth: 0,
          text: ["50%", "50%"],
        },
      ],
    };

    const donutChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    };

    onMounted(() => {
      if (barChartCanvas.value) {
        const barChart = new Chart(barChartCanvas.value, {
          type: "bar",
          data: barChartData,
          options: barChartOptions,
        });

        if (barChartLegend.value) {
          barChartLegend.value.innerHTML = "";
          barChartData.datasets.forEach((dataset) => {
            const legendItem = document.createElement("div");
            legendItem.classList.add(
              "flex",
              "items-center",
              "space-x-2",
              "text-white"
            );

            const colorBox = document.createElement("span");
            colorBox.classList.add("w-4", "h-4", "rounded-full");
            colorBox.style.backgroundColor = dataset.backgroundColor as string;

            const label = document.createElement("span");
            label.textContent = dataset.label;

            legendItem.appendChild(colorBox);
            legendItem.appendChild(label);

            barChartLegend.value?.appendChild(legendItem);
          });
        }
      }

      if (donutChartCanvas.value) {
        const donutChart = new Chart(donutChartCanvas.value, {
          type: "doughnut",
          data: donutChartData,
          options: donutChartOptions,
        });

        if (donutChartLegend.value) {
          donutChartLegend.value.innerHTML = "";
          donutChartData.labels.forEach((label, index) => {
            const legendItem = document.createElement("div");
            legendItem.classList.add(
              "flex",
              "items-center",
              "space-x-2",
              "text-white"
            );

            const colorBox = document.createElement("span");
            colorBox.classList.add("w-4", "h-4", "rounded-full");
            colorBox.style.backgroundColor = donutChartData.datasets[0]
              .backgroundColor[index] as string;

            const labelText = document.createElement("span");
            labelText.textContent = label;

            legendItem.appendChild(colorBox);
            legendItem.appendChild(labelText);

            donutChartLegend.value?.appendChild(legendItem);
          });
        }
      }
    });

    return {
      barChartCanvas,
      donutChartCanvas,
      barChartLegend,
      donutChartLegend,
    };
  },
});
</script>
