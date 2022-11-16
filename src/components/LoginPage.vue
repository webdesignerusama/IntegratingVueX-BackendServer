<template>
     <v-main >
        <div class="mt-5">
          <h1 class="text-center">Please login</h1>
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
           <v-btn type="submit">Login</v-btn>
            <v-btn class="ml-5" to="/signUpPage">Signup,i dont have any account </v-btn>
    </v-container>
  </v-form>
  </v-main>
</template>

<script>
export default {
    data(){
        return{
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
          loginButton(){
                  fetch('http://localhost:3000/login',{
                    method:'POST',
                    headers:{
                        'Content-type':'application/json',
                },
                  body:JSON.stringify({email:this.email})
                  }).then((res)=> res.json()).then((data)=> {
                    
                    if(data){
                       localStorage.setItem('token', data.token)
                       localStorage.setItem('me', JSON.stringify(data.user))
                       this.$router.push('/Home')
                    }
                  })


        //    let arr= JSON.parse(localStorage.getItem('credentials'))
        
        // arr.forEach(element => {
        //     if (element.firstName === this.firstname && element.password===this.password) {
        //         element.validity = true
        //     localStorage.setItem('validItem', JSON.stringify(element))
        //     }
        // });
        // localStorage.setItem('credentials', JSON.stringify(arr))
        // this.$router.push('/Home')
        },
      
      
    }
}
</script>