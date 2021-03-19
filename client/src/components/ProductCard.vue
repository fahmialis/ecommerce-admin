<template>
<div>
  <div class="row p-2 bg-white border rounded">
    <!-- image here -->
    <div class="col-md-3 mt-1">
        <img class="img-fluid img-responsive rounded product-image" :src="product.image_url" placeholder="product image">
    </div>
        <!-- image here -->

        <!-- item name here -->
    <div class="col-md-6 mt-1" style="font-family: Poppins">
        <h4>Product detail</h4>
        <br>
        <div class="mt-1 mb-1 spec-1">
            <h5>Name : {{product.name}} </h5>
        </div>
        <div class="mt-1 mb-1 spec-1">
            <h5>Price : {{product.price}}</h5>
        </div>
        <div class="mt-1 mb-1 spec-1">
            <h5>Stock : {{product.stock}}</h5>
        </div>
    </div>
        <!-- item name here -->

    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
        <br>
        <!-- link to action -->
        <div class="d-flex flex-column mt-4">
            <button class="btn btn-primary btn-xl" type="button" @click.prevent="editProduct(product.id)">Edit Product</button>
            <button class="btn btn-danger btn-xl" @click.prevent="deleteProduct(product.id)" type="button" >Delete</button>
        </div>
        <!-- link to action -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct (id) {
      console.log(id)
      this.$router.push(`/editProduct/${id}`)
    }
  }
}
</script>

<style>
.product-image {
  width: 100%
}
</style>
