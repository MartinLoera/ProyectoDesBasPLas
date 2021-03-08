<template>
  <b-navbar toggleable="lg" dark variant="primary">
    <!-- Home -->
    <b-button-group>
      <b-button  variant="primary">
        <b-icon icon="grid3x3-gap-fill">
        </b-icon>
        Inicio
      </b-button>
    </b-button-group>

    <!-- Chats -->
    <b-button-group>
      <b-button variant="primary">
        <b-icon icon="chat-left-fill">
        </b-icon>
        Chats
      </b-button>
    </b-button-group>

    <!-- Profile -->
    <b-button-group>
      <b-button variant="primary">
        <b-icon icon="person-circle">
        </b-icon>
        Profile
      </b-button>
    </b-button-group>

    <b-navbar-nav class="ml-auto">
      <b-button-group class="mr-4">
        <b-button variant="primary">
          <b-img :src=image rounded="circle" alt="user-circle" width="35px" height="35px" class="mr-2"></b-img>
          {{username}}
        </b-button>
      </b-button-group>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  props: ["username", "image"]
}
</script>

<style scoped>

</style>