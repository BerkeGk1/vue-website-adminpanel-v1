<template>
  <loginNav />
  <div id="cssDisplay">
    <p>
      BU SAYFA YAPIM AŞAMASINDADIR LÜTFEN 10 SANİYE BEKLEYİNİZ YA DA ÇIKIŞ
      YAPINIZ
    </p>
  </div>
</template>

<style scoped>
@import url(/public/template/projectsTemplate/css/main.css);
</style>
<script>
import loginNav from "./login-nav.vue";

export default {
  components: {
    loginNav,
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
