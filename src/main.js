/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Home from './components/ComponentOne.vue'
import SecondHome from './components/componentTwo.vue'
import LoginPage from './components/LoginPage.vue'
import SignUpPage from './components/SignUpPage.vue'
// Composables
import { createApp } from 'vue'
//vuex
import {createStore} from 'vuex'
//router
import { createRouter, createWebHistory } from 'vue-router'
// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'

    // const store=createStore({
    //   state(){
    //     return{

    //     }
    //   },
    //   mutations:{

    //   },
    //   getters:{

    //   },
    //   actions:{

    //   }

    // })



const app = createApp(App)
const router= createRouter({
  history: createWebHistory(),
  routes:[
  {path:'/', component:LoginPage, meta:{requireUnAuth:true}},
  {path:'/signUpPage',component:SignUpPage,meta:{requireUnAuth:true}},
  {path:'/Home', component:Home, meta: {requireAthentication:true}},
  {path:'/secondhome/:id/:title', component:SecondHome, meta:{requireAthentication:true}} 
  
]
})

router.beforeEach((to,_,next)=>{
  let validity= localStorage.getItem('token')
  if(to.meta.requireAthentication && !validity){
      next('/signUpPage')
  }else if(to.meta.requireAthentication && validity){
      next()
  }else if(to.meta.requireUnAuth && validity){
      next('/Home')
  }else if(to.meta.requireUnAuth && !validity){
      next()
  }
})
registerPlugins(app)
app.use(router)
app
  .use(vuetify)
  .mount('#app')
