import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'
import Key from '../views/home/key/key.vue'
import Add from '../views/home/key/add.vue'
import List from '../views/home/key/list.vue'
import Detail from '../views/home/key/detail.vue'
import Index from '../views/home/index_home.vue'
import School from '../views/home/school/school.vue'
import School_List from '../views/home/school/list.vue'
import School_Num from '../views/home/school/num.vue'
import Box from '../views/home/school/box.vue'
import Add_school from '../views/home/school/add.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",   // path 设置为 “/” ，默认显示该页面
    component:Login,
    name:"login"
  },
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
    },{
      path:'school',
      component:School,
      children:[
        {
          path:'list',
          component:School_List
        },{
          path:'num',
          component:School_Num
        },
        {
          path:'box',
          component:Box
        },
        {
          path:'add',
          component:Add_school
        }
      ]
    }]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
