<template>
     <div  >
        <div class="mt-5">
          <h1 class="text-center">Please create you account</h1>
        </div>
      <v-form v-model="valid" @submit.prevent="loginButton()">
    <v-container class="mt-5">
      
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
       
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
          <v-file-input
            accept="image/*"
            label="File input"
            @change="baseFunc"
        ></v-file-input>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
           <v-btn type="submit">Sign Up</v-btn>
            <v-btn class="ml-5" to="/">Already have an account</v-btn>
    </v-container>
  </v-form>
      </div>
</template>

<script>
export default {
    data(){
    return{
        imgurl:'',
      login:false,
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
    }
  },
  methods:{
    baseFunc(e){
           let file= e.target.files[0]
           let reader= new FileReader()
           reader.onload= ()=>{
            console.log('RESULT', reader.result)
            this.imgurl= reader.result
           } 
           reader.readAsDataURL(file)
    },
  loginButton(){
    
    console.log('usaa')
         let myObj= {
          firstName: this.firstname,
          lastName: this.lastname,
          email:this.email,
          password:this.password,
          imgAddress: this.imgurl,
          validity: false
         }
          console.log()
        if(localStorage.getItem('credentials')){
                let arr= JSON.parse(localStorage.getItem('credentials'))
                arr.push(myObj)
                localStorage.setItem('credentials', JSON.stringify(arr))
        } else{
          localStorage.setItem("credentials", JSON.stringify([myObj]))
        }
  },

 }    
}
</script>