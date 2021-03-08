<template>
<div>
  <b-card
    header="Social Media Profiles"
    header-tag="header"
    style="max-width: 20rem;"
    class="mb-2"
    >
     <social-media-profile v-for="profile in socialMedia" :key="profile.url" :socialMedia="profile">

    </social-media-profile>
  </b-card>
</div>
</template>

<script>
import SocialMediaProfile from "@/components/SocialMediaProfile";
export default {
name: "socialMediaComponent.vue",
  components: {
   SocialMediaProfile,
  },
  props:{
      socialMedia: Array
  }
}
</script>

<style scoped>

</style>