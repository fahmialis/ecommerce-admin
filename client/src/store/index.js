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
          if (data.data.role !== 'Admin') {
            const err = 'not authorized'
            throw err
          }
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/home')
        })
        .catch(err => {
          // console.log({ err })
          if (err === 'not authorized') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Sorry, only admin can login'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${err.response.data.message}`
            })
          }
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
          router.push('/home')
        })
        .catch(err => {
          // console.log(err.response.data.message)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    deleteProduct (context, payload) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          cancelButton: 'btn btn-danger',
          confirmButton: 'btn btn-success'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          const id = payload
          const headers = {
            access_token: localStorage.access_token
          }
          axios.delete(`product/${id}`, { headers })
            .then(data => {
              // console.log(data)
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Product has been deleted.',
                'success'
              )
            })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            '',
            'error'
          )
        }
      })
    },
    confirmEditProduct (context, payload) {
      // console.log(payload)
      const id = +payload.id
      const headers = {
        access_token: localStorage.access_token
      }
      axios.put(`product/${id}`, payload, { headers })
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data updated'
          })
          router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
