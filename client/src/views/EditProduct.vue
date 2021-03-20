<template>
<div class="container" >
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
            <div class="card-body">
                <h4 class="card-title text-center"><b>Edit product</b></h4>
                <form class="form-signin" @submit.prevent="confirmEditProduct()">
                    <div class="form-label-group">
                        <h5>Name</h5>
                        <input type="text" id="inputName" class="form-control" placeholder="Name" v-model="product.name" required autofocus>
                    </div>
                    <br>
                    <div class="form-label-group">
                        <h5>Price</h5>
                        <input type="number" id="inputPrice" class="form-control" placeholder="Price" v-model="product.price" required autofocus>
                    </div>
                    <br>
                    <div class="form-label-group">
                        <h5>Stock</h5>
                        <input type="number" id="inputStock" class="form-control" placeholder="Stock" v-model="product.stock" required autofocus>
                    </div>
                    <br>
                    <div class="form-label-group">
                        <h5>Image</h5>
                        <input type="url" id="inputImage" class="form-control" placeholder="Image url" v-model="product.image_url" required autofocus>
                    </div>
                    <br><br>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                    <button class="btn btn-lg btn-danger btn-block" @click.prevent='returnHome'>Cancel</button>
                </form>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'editProduct',
  data () {
    return {
      product: {
        name: '',
        price: '',
        stock: '',
        image_url: ''
      },
      id: this.$route.params.id
    }
  },
  methods: {
    returnHome () {
      this.$router.push('/home')
    },
    confirmEditProduct () {
      const data = {
        id: this.id,
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock,
        image_url: this.product.image_url
      }
      this.$store.dispatch('confirmEditProduct', data)
    },
    getDataById () {
      // console.log(id)
      const data = this.$store.state.products
      // console.log(data)
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === +this.id) {
          this.product.name = data[i].name
          this.product.price = data[i].price
          this.product.stock = data[i].stock
          this.product.image_url = data[i].image_url
        }
      }
    }
  },
  created () {
    this.getDataById()
    // console.log(this.$store.state.products)
  }
}
</script>

<style>

</style>
