<template>
    <h1>componet1</h1>
    <v-btn @click="extractApi()">fetch</v-btn>
    <v-container class="d-flex justify-end mb-5">
        <v-card
        
    class=""
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="imgsrc"
      cover
    >
      <v-card-title class="text-black">{{firstName+'  '+ LastName}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        Share
      </v-btn>

      <v-btn color="orange">
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

    </v-container>
    <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">
          id
        </th>
        <th class="text-left">
          userid
        </th>
        <th class="text-left">
          name
        </th>
        <th class="text-left">
          title
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dataArr"
        :key="item.id"
        @click="itemDetails(item)"
      >
        <td>{{ item.userId }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.title }}</td>

      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
       data(){
       return {
          dataArr:[],
          firstName:'',
          LastName:'',
          imgsrc:''
       }
       },
     mounted(){
           fetch('http://localhost:3000/findUser',{
            method:"POST",
            headers:{
                'Content-type':'application/json',
                 'Authorization':'Bearer '+ JSON.parse(localStorage.getItem('token'))
            },
            body:JSON.stringify({id:1}),
           }).then(res=> res.json()).then(data=> {
            console.log(data.user.last_name)
            this.firstName= data.user.first_name
            this.LastName= data.user.last_name

           })

    //    let obj= JSON.parse(localStorage.getItem('validItem'))
    //    this.firstName= obj.firstName
    //    this.LastName= obj.lastName
    //    this.imgsrc= obj.imgAddress
 
     },
    methods:{
       extractApi(){
          fetch('https://jsonplaceholder.typicode.com/todos').then(res=> res.json()).then(data=> this.dataArr= data 
          ) 
        },
        itemDetails(item){
            this.$router.push('/secondhome'+'/'+ item.id +'/' + item.title)
        }

    }
}
</script>