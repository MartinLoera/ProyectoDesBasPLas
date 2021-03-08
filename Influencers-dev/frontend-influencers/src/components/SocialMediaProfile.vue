<template>
<div>
  <b-row>
    <b-col cols="2">
      <b-icon :icon="socialMedia.socialNetwork">
      </b-icon>
    </b-col>
    <b-col cols="10">
      <p>
        {{ socialMedia.url }}
      </p>
    </b-col>
  </b-row>
</div>
</template>

<script>
export default {
name: "SocialMediaProfile",
  props:{
    socialMedia: Object
  }
}
</script>

<style scoped>

</style>