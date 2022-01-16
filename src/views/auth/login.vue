// components/Login.vue
<template>
  <div class="col-xs-2">
    <div id="login" class="form-group">
      <div class="form-group">
        <label for="ID">ID</label>
        <input type="text" class="form-control" v-model="username"
          v-validate="'required'"
        />
      </div>
      <!-- <div class="alert alert-danger" role="alert" v-if="errors.has('asabn')">Username is required!</div> -->

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="password"
          v-validate="'required'"
        />
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary btn-block" value="Login" @click="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  computed: {
    invalidForm() {
      return !this.username || !this.password;
    }
  },
  data() {
    return {
      username: "",
      password: "",
      returnPath: "",
      error: "",
      grant_type: "password",
      loading: false,
      message: "",
    };
  },
  created() {
    this.returnPath = this.$route.query.returnPath || "/";
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("LOGIN", {
          username: this.username,
          password: this.password,
          grant_type: this.grant_type,
        })
        .then(() => {
          this.$router.push(this.returnPath);
        }) 
    },
  },
};
</script>
<style scoped>
#login {
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
}
</style>
