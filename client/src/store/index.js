import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      axios.post('/user/login', payload)
        .then(data => {
          // console.log({ data })
          // console.log(data.data.access_token)
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log({ err })
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    logout (context, payload) {
      localStorage.removeItem('access_token')
      router.push('/login')
    },
    getProducts (context, payload) {
      const headers = {
        access_token: localStorage.access_token
      }
      axios.get('/product', { headers })
        .then(({ data }) => {
          // console.log({ data })
          context.commit('addProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      // console.log('masuk add product')
      const headers = {
        access_token: localStorage.access_token
      }
      axios.post('/product', payload, { headers })
        .then(({ data }) => {
          // console.log(data)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'New product added'
          })
          router.push('/')
        })
        .catch(err => {
          // console.log(err.response.data.message)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    }
  },
  modules: {
  }
})
