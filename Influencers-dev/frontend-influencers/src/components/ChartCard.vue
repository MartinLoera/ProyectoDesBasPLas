<template>
  <b-card>
    <b-row align-v="end">
      <b-col v-for="sonet in socialButtons" :key="sonet.id" >
        <b-button @click="renderChart(sonet.name)">{{ sonet.name }}</b-button>
      </b-col>
    </b-row>

    <chart-component
      :labelData="socialDataLabels"
      :socialFilterData="socialFilterData"
      :key="counter"
    >
    </chart-component>
    <b-row align-v="end">
      <b-col v-for="sFilter in socialFiltersOptions" :key="sFilter.id" >
        <b-button @click="socialFilters(sFilter.name)">{{ sFilter.name }}</b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import ChartComponent from "@/components/ChartComponent";

export default {
  name: "ChartCard",
  components: {
    ChartComponent,
  },
  data() {
    return {
      counter:0, 
    };
  },
  props: {
    socialFilterData: Array,
    socialDataLabels: Array,
    socialButtons: Array,
    chartDataLabel: Array,
    chartData: Array,
    socialFiltersOptions: Array
  },
  methods: {
      renderChart(name) {
        if (name === 'Facebook') {
            // this.socialDataLabels = chartDataLabel 
            this.socialDataLabels = ["1","2","3","4"]
            //this.socialDataLabels = chartData
            this.socialFilterData = [4, 2, 8, 17]
            this.counter += 1
        }
        if (name === 'Youtube') {
            this.socialDataLabels = ["a","e","i","o"]
            this.socialFilterData = [8,49,27,14]

            this.counter += 1
        }
        if (name === 'Instagram') {
            this.socialDataLabels = ["x","y","z","f"]
            this.socialFilterData = [14,52,36,89]
            this.counter += 1
        }
      },
      socialFilters(){
          this.counter += 1
      } 

  },
};
</script>
<style>
.chartStyle h1 {
  color: red;
}
</style>