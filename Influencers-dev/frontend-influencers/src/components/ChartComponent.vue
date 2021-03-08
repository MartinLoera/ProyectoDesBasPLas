<script>
import  VueChartJs  from "vue-chartjs";

export default {
  name: "ChartComponent",
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: this.labelData,
      datasets: [
          {
            label: 'Data One',
            data: this.socialFilterData,
            backgroundColor: '#f87979',
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      })
  },
  props: {
          labelData: Array,
          socialFilterData: Array,
  },

};
</script>

<style >

</style>