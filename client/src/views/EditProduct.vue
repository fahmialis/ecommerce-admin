<template>
<div class="container" >
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
            <div class="card-body">
                <h4 class="card-title text-center"><b>Edit product</b></h4>
                <form class="form-signin">
                    <div class="form-label-group">
                        <h5>Name</h5>
                        <input type="text" id="inputName" class="form-control" placeholder="Name" required autofocus>
                    </div>
                    <br>
                    <div class="form-label-group">
                        <h5>Price</h5>
                        <input type="number" id="inputPrice" class="form-control" placeholder="Price" required autofocus>
                    </div>
                    <br>
                    <div class="form-label-group">
                        <h5>Stock</h5>
                        <input type="number" id="inputStock" class="form-control" placeholder="Stock" required autofocus>
                    </div>
                    <br>
                    <div class="form-label-group">
                        <h5>Image</h5>
                        <input type="url" id="inputImage" class="form-control" placeholder="Image url" required autofocus>
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
  methods: {
    returnHome () {
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
