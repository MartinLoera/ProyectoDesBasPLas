<template>
  <b-container>
    <b-list-group-item @click="onClick" :variant="color" style="width: 25%">
      <b-row style="height: 50px" >
        <b-col sm="0" >
          <b-avatar :src="image" class="align-baseline"></b-avatar>
        </b-col>
        <b-col style="width: 50%">
           <p>
        {{name}}
           </p>
          <b-col>
          <p>
            {{text}}
          </p>
        </b-col>
        </b-col>
      </b-row>
  </b-list-group-item>
  </b-container>
</template>

<script>
export default {
  methods: {
      onClick() {
        this.$bvModal.msgBoxOk('User name: Julio Rodelas', {
          title: 'Informacion del Usuario',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0'
        })
      }
    },
name: "Currentchat.vue",
  props:{
    color: String,
    text: String,
    image:String,
    name: String
  }
  }

</script>

<style scoped>

</style>