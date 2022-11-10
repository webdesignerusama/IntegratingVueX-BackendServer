<template>
  <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Photos</v-app-bar-title>

           <v-btn @click="fetchData()"></v-btn>
           <v-btn @click="signOut()">SignOut</v-btn>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-main>
        
      </v-main>
    </v-layout>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
           signOut(){
            localStorage.removeItem('token')
            this.$router.push('/')
           },
           fetchData(){
            fetch('http://localhost:3000/getallusers').then(data=> data.json()).then(data=> console.log(data))
           }
  }
}
</script>