<template>
  <div style="width: 500px">
    <div style="display: flex" class="justify-between mb-10 space-x-4">
      <button
        type="button"
        class="px-4 py-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-300 hover:shadow-xl duration-400"
        @click="shuffleData"
      >
        Shuffle
      </button>
      <button
        type="button"
        class="px-4 py-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-300 hover:shadow-xl duration-400"
        @click="switchLegend"
      >
        Swicth legends
      </button>
    </div>

    <DoughnutChart
      v-bind="doughnutChartProps"
      class="px-4 py-2 bg-gray-200 border-t-2 border-indigo-500 rounded-md shadow-xl"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { shuffle } from 'lodash'
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3'
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'

Chart.register(...registerables)
export default defineComponent({
  name: 'App',
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5])
    const dataLabels = ref(['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'])
    const toggleLegend = ref(true)

    const testData = computed<ChartData<'doughnut'>>(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED',
          ],
        },
      ],
    }))

    const options = computed<ChartOptions<'doughnut'>>(() => ({
      scales: {
        myScale: {
          type: 'logarithmic',
          position: toggleLegend.value ? 'left' : 'right',
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? 'top' : 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    }))

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    })

    let index = 20

    function shuffleData() {
      // dataValues.value = shuffle(dataValues.value);
      dataValues.value.push(++index)
      dataLabels.value.push('Autre')
      console.log(dataValues.value)
      console.log(doughnutChartRef.value.chartInstance)
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
    }
  },
})
</script>

<style></style>
