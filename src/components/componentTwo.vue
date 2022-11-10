<template>
   <div class="text-center">
      <h1>{{myobj.id}}</h1>
      <h1>{{myobj.title}}</h1>

   </div>
</template>

<script>
export default {
    data(){
        return{
           myobj:{}
        }
    },
    mounted(){
        console.log(this.$route.params)
        this.myobj= this.$route.params
    },
    methods:{
    
    }
}
</script>