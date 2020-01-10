import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'
import Key from '../views/home/key/key.vue'
import Add from '../views/home/key/add.vue'
import List from '../views/home/key/list.vue'
import Detail from '../views/home/key/detail.vue'
import Index from '../views/home/index_home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home,
    children:[{
      path:'/',
      component:Index,
    },{
      path:'key',
      component:Key,
      children:[
        {
          path:'list',
          component:List,
        },{
        path:'add',
        component:Add,
      },{
        path:'detail',
        component:Detail,
      }]
    }]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
