<template>
  <body id="login" class="login login-body">
    <div class="container">
      <div class="login-container-wrapper clearfix">
        <div class="logo">
          <img :src="logo" alt="" />
        </div>
        <div class="welcome"><strong>Welcome,</strong> please login</div>

        <form @submit.prevent="login" class="form-horizontal login-form">
          <div class="form-group relative">
            <input
              id="login_username"
              class="form-control input-lg"
              type="email"
              placeholder="Email"
              required
              v-model="email"
            />
            <i class="fa fa-user"></i>
          </div>
          <div class="form-group relative password">
            <input
              id="login_password"
              class="form-control input-lg"
              type="password"
              placeholder="Password"
              required
              v-model="password"
            />
            <i class="fa fa-lock"></i>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success btn-lg btn-block"
              value="Login"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>

<style scoped>
@import url(/public/template/loginTemplate/css/main.css);
</style>

<script>
import { mapGetters } from "vuex";
export default {
  beforeCreate() {
    this.$store.dispatch("setPageImages");
  },
  computed: {
    ...mapGetters({
      logo: "_logo",
    }),
  },
  data() {
    return {
      email: "",
      password: ",",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/projects");
        });
    },
  },
  created() {

    window.scrollTo(0, 0);
  },
  beforeRouteEnter(to, from, next) {

    document.body.style.overflow = "hidden";
    next();
  },
  beforeRouteLeave(to, from, next) {

    document.body.style.overflow = "";
    next();
  },
};
</script>

<style scoped>
.error-message {
  background-color: #f00;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
