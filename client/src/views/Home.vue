<template>
<body>
  <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            <!-- product card -->
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
                      <button class="btn btn-primary btn-xl" type="button">Edit Product</button>
                    </div>
                    <!-- link to edit page -->
                </div>
            </div>
            <!-- product card -->
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
    </div>
  </div>
</body>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard }

}
</script>

<style scoped>
body {
  background: #eee
}

.product-image {
  width: 100%
}

.dot {
  height: 7px;
  width: 7px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 3px;
  background-color: blue;
  border-radius: 50%;
  display: inline-block
}
</style>
