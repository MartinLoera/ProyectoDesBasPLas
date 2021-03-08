<template>
<b-container>
  <filter-component
      :regions="regions"
      :categories="categories"
      @onFilter="filterData"
  >
  </filter-component>
  <b-card-group columns class="ml-5">
      <influencer-card-component v-for="profile in influencers" :key="profile.id" :influencer="profile">
    </influencer-card-component>
  </b-card-group>
</b-container>
</template>
<script>
import InfluencerCardComponent from "@/components/InfluencerCardComponent";
import FilterComponent from "@/components/FilterComponent";
export default {
  name: "MainPage",
  components: {
    InfluencerCardComponent,
    FilterComponent,
  },
  data() {
    return {
      regions: [],
      categories: [],
      influencers:[
        {
          name: "Karen Barrera",
          region: "Mexico",
          categories:[],
          img:"https://1.bp.blogspot.com/-xXFs38_9aQ4/Xzhm3SsTpcI/AAAAAAAAAuY/nNVy1t5S_vsqBVDMdj4HvF4Wcbd2QmveACLcBGAsYHQ/s1350/karen6bg_117224312_775108486588648_108236004595658589_n.jpg",
        },
        {
          name: "Yuya",
          region: "Mexicana",
          categories:[],
          img:"https://www.revistaclase.mx/sites/default/files/upload/images/yuya.jpg",
        },
      {
          name: "Luisito Comunica",
          region: "Mexicano",
          categories:[],
          img:"https://www.elimparcial.com/__export/1602546912330/sites/elimparcial/img/2020/10/12/luisitocomunicapublinews-cfced474ef2d7f9012d5e67a20f857aa-1200x800.jpg_423682103.jpg",
        },
        ],
    }
  },
  methods: {
    getCategories(){
      //TODO: API call
      this.categories = [
        {
          value: 1,
          text: "Autos"
        },
        {
          value: 2,
          text: "Musica"
        },
      ]
    },
    getRegions(){
      //TODO: API call
      this.regions = [
        {
          value: 1,
          text: "Mexico"
        },
        {
          value: 2,
          text: "USA"
        },
        {
          value: 3,
          text: "Canada"
        }
      ]
    },
    filterData(filter){
      console.log(filter);
    }
  },
  mounted() {
    this.getRegions();
    this.getCategories();
  }
}
</script>
<style>

</style>