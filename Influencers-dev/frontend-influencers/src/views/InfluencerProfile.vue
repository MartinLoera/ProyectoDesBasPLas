<template>
  <b-container>
      <b-row>
          <b-col>
            <influencer-card-component
            region="Influencer mex"
            :influencer="influencer"
            ></influencer-card-component >
          </b-col>

          <b-col>
            <social-media-component :socialMedia="influencer.socialMedia">
            </social-media-component>
          </b-col>
      </b-row>


    <chart-card :socialFilterData="dataFilter" :socialDataLabels="labels" :socialButtons="socialNetworks" :socialFiltersOptions="socialFilter">
    </chart-card>
  </b-container>
</template>

<script>
import ChartCard from '../components/ChartCard.vue';
import InfluencerCardComponent from "../components/InfluencerCardComponent.vue";
import SocialMediaComponent from '../components/SocialMediaComponent.vue';

export default {
  name: "InfluencerProfile",
  data() {
    return {
      influencer: {
        name: "Luisito Comunica",
        img: "https://www.elimparcial.com/__export/1602546912330/sites/elimparcial/img/2020/10/12/luisitocomunicapublinews-cfced474ef2d7f9012d5e67a20f857aa-1200x800.jpg_423682103.jpg",
        categories: ['Viajes','Memes','Comida','Tecnologia'],
        socialMedia:[
          {
            socialNetwork: "Facebook",
            url: "http://Facebook/profile"
          },
          {
            socialNetwork: "Instagram",
            url: "http://IG/profile"
          },
          {
            socialNetwork: "Youtube",
            url: "http://YT/profile"
          },
          {
            socialNetwork: "Twitter",
            url: "http://TW/profile"
          }
        ]
      },
      socialFilter:[
        {
          name: "Likes",
          dataLabel: [],
          data:[],
          id: 1
        },
        {
          name: "Views",
          dataLabel: [],
          data:[],
          id:2
        },
        {
          name: "Follows",
          dataLabel: [],
          data:[],
          id: 3
        },
        ],
      dataFilter: [5,42,12,20],
      socialNetworks: [
      {
        name: "Facebook",
        id:"1"
      },
      {
        name: "Youtube",
        id: "2"
      },
      {
        name: "Instagram",
        id: "3"
      },
    ],
      labels: []
    };
  },
  components: {
    InfluencerCardComponent,
    ChartCard,
    SocialMediaComponent,
  },
};
</script>

<style></style>
