<template>
<div>
<Navbar></Navbar>
<body>
  <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            <!-- product card -->
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
            <!-- product card -->
        </div>
    </div>
  </div>
</body>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Navbar from '../components/Navbar'

export default {
  components: { ProductCard, Navbar }

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
