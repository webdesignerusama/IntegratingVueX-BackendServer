<template>
  <v-app>
    <v-main >
      <HelloWorld />
      <router-view></router-view>
    </v-main>
   </v-app>
   
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { HelloWorld },
 
 mounted(){
     this.login=localStorage.getItem('token')
 },
 
}
</script>
