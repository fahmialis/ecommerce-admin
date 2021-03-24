import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/editProduct/:id',
    name: 'editProduct',
    component: EditProduct
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'home' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'addProduct' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'editProduct' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if ((to.name === 'Login') && localStorage.access_token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
