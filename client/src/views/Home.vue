<template>
<div>
<Navbar></Navbar>
<body>
  <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            <!-- product card -->
          <ProductCard v-for="product in products"
          :key="product.id"
          :product="product"
          ></ProductCard>
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
import { mapState } from 'vuex'

export default {
  name: 'home-page',
  components: { ProductCard, Navbar },
  data () {
    return {
      productData: {
        name: '',
        price: '',
        stock: '',
        image_url: ''
      }
    }
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProducts')
    }
  },
  created () {
    this.getProduct()
    // console.log(this.$store.state.products)
  },
  updated () {
    this.getProduct()
  },
  computed: {
    ...mapState(['products'])
  }
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
