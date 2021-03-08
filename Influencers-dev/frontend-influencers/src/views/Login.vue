<template>
  <b-container>
    <b-row>
      <b-col style="font-size: 2em">{{tittle}}</b-col>
    </b-row>

    <!-- Login Form -->
    <b-container  v-show="true">
      <b-row>
        <b-col>
          <label for="email-login" >Correo electronico</label>
          <b-form-input id="email-login" type="email" v-model="email"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
          <b-col>
          <label for="password-login">Contraseña</label>
          <b-form-input id="password-login" type="password" v-model="password"></b-form-input>
        </b-col>
      </b-row>
      
    <b-container>
      <br>
      <b-row align-h="center" class="mt-0">
        <b-col>
          <b-button variant="info" @click="redirectToRegister">Registro</b-button>
        </b-col>
        <b-col>
          <b-button variant="success" @click="sendLogin">Iniciar sesion</b-button>
        </b-col>
      </b-row>
    </b-container>

    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      tittle:'Iniciar sesion',
      activateLogin: true,
      activateSingup: false,
      password: '',
      pass2: '',
      email: '',
      names: '',
      lastNames: '',
      birthDate: '',
    };
  },
  props: [],
  methods: {
    sendLogin(){
      alert('Se mando el login')
    },
    redirectToRegister(){
      alert('Se mando el registro')
    }
    
  },
  computed: {
  },

};
</script>

<style>

</style>
