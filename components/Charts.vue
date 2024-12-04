<template>
  <div class="px-4 b">
    <div class="p-4 bg-[#1E1E1E] rounded-lg shadow-md">
      <div class="pb-4 text-base">
        <h1 class="text-white">Net Profit</h1>
        <p class="text-description font-extralight">2024</p>
      </div>

      <div class="w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <canvas ref="chartCanvas" class="w-full h-full"></canvas>
      </div>
      <div class="mt-4 flex justify-center space-x-4" ref="customLegend"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default defineComponent({
  name: "ColumnChart",
  setup() {
    const chartCanvas = ref<HTMLCanvasElement | null>(null);
    const customLegend = ref<HTMLDivElement | null>(null);

    const chartData = {
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

    const chartOptions = {
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

    onMounted(() => {
      if (chartCanvas.value) {
        const chart = new Chart(chartCanvas.value, {
          type: "bar",
          data: chartData,
          options: chartOptions,
        });

        if (customLegend.value) {
          customLegend.value.innerHTML = "";
          chartData.datasets.forEach((dataset) => {
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

            customLegend.value?.appendChild(legendItem);
          });
        }
      }
    });

    return {
      chartCanvas,
      customLegend,
    };
  },
});
</script>
