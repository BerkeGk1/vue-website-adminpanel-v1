<template>
  <Navbar />
  <intro />
  <about_skills />
  <resume />

  <portfolio />
  <seeprojects />
  <services />
  <contact />
  <div id="preloader">
    <div id="loader">
      <img src="images/BG-logo.webp" alt="Logo" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import intro from "../components/intro-me.vue";
import about_skills from "../components/about-skills.vue";
import portfolio from "../components/portfolio-me.vue";
import seeprojects from "../components/see-projects.vue";
import services from "../components/services-me.vue";
import contact from "../components/contact-me.vue";
import resume from "../components/resume-me.vue";
import Navbar from "../components/Nav-Bar.vue";

export default {
  beforeCreate() {
    this.$store.dispatch("setPageImages");
  },
  computed: {
    ...mapGetters({
      intro_background: "_intro_background",
      profile_pic: "_profile_pic",
      logo: "_logo",
      services_background: "_services_background",
    }),
  },
  components: {
    intro,
    about_skills,
    portfolio,
    seeprojects,
    contact,
    resume,
    Navbar,
    services,
  },
};
</script>
