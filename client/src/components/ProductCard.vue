<template>
  <div class="row p-2 bg-white border rounded">
    <!-- image here -->
    <div class="col-md-3 mt-1">
        <img class="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg">
    </div>
        <!-- image here -->

        <!-- item name here -->
    <div class="col-md-6 mt-1" style="font-family: Poppins">
        <h4>Product detail</h4>
        <br>
        <div class="mt-1 mb-1 spec-1">
            <h5>Name : </h5>
        </div>
        <div class="mt-1 mb-1 spec-1">
            <h5>Price : </h5>
        </div>
        <div class="mt-1 mb-1 spec-1">
            <h5>Stock : </h5>
        </div>
    </div>
        <!-- item name here -->

    <div class="align-items-center align-content-center col-md-3 border-left mt-1">
        <br><br>
        <!-- link to edit page -->
        <div class="d-flex flex-column mt-4">
            <button class="btn btn-primary btn-xl" type="button" @click.prevent="editProduct">Edit Product</button>
        </div>
        <!-- link to edit page -->
    </div>
</div>
</template>

<script>
export default {
  methods: {
    editProduct () {
      this.$router.push('/editProduct')
    }
  }

}
</script>

<style>
.product-image {
  width: 100%
}
</style>
