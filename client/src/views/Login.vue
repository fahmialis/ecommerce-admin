<template>
  <div>
    <div class="container" >
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Log In</h5>
                    <form class="form-signin">
                    <div class="form-label-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
                    </div>
                    <br>
                    <div class="form-label-group">
                        <label for="inputPassword">Password</label>
                        <br>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                    </div>
                    <br><br>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click.prevent="login">Sign in</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/')
    }
  }

}
</script>

<style>
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

</style>
