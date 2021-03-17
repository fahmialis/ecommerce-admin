<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin Page</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-md-auto gap-2">
        <li class="nav-item rounded">
          <a class="nav-link active" href="#" @click.prevent="addProduct"><i class="bi bi-house-fill me-2"></i>Add Product</a>
        </li>
        <li class="nav-item rounded">
          <a class="nav-link active" href="#" @click.prevent="logout" ><i class="bi bi-house-fill me-2"></i>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    addProduct () {
      this.$router.push('/addProduct')
    },
    logout () {
      this.$router.push('/login')
    }

  }

}
</script>

<style scoped>
.navbar-nav .nav-item:hover {
  background-color: rgba(180, 190, 203, 0.4);
}

</style>
