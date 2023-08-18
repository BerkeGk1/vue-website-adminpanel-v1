<template>
  <!-- about section 
   ================================================== -->
  <section id="about">
    <div class="row section-intro">
      <div class="col-twelve gs_reveal gs_reveal_fromLeft">
        <h5>{{ resume.pageTitle }}</h5>
        <h1>{{ resume.titleDesc }}</h1>

        <div class="intro-info gs_reveal gs_reveal_fromRight">
          <img :src="resume.myImageSrc" alt="Profile Picture" />

          <p class="lead">{{ resume.desc }}</p>
        </div>
      </div>
    </div>
    <!-- /section-intro -->

    <div class="row about-content">
      <div class="col-six tab-full gs_reveal gs_reveal_fromLeft">
        <h3>{{ resume.profile.title }}</h3>
        <span>
          {{ resume.profile.desc }}
        </span>

        <ul class="info-list">
          <li>
            <strong>Fullname:</strong>
            <span>{{ name }}</span>
          </li>
          <li>
            <strong>Birth Date:</strong>
            <span>{{ resume.profile.birthdate }}</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>{{ resume.profile.job }}</span>
          </li>
          <li>
            <strong>Website:</strong>
            <span>{{ resume.profile.website }}</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>{{ resume.profile.email }}</span>
          </li>
        </ul>
        <!-- /info-list -->
      </div>

      <div class="col-six tab-full gs_reveal gs_reveal_fromRight">
        <h3>Skills</h3>

        <div class="col-six tab-half">
          <ul class="skill-bars">
            <li
              v-for="skill in skills.slice(0, skills.length / 2)"
              v-bind:key="skill"
            >
              <div :class="'progress percent' + skill.percent">
                <span>{{ skill.percent }}%</span>
              </div>
              <strong>{{ skill.title }}</strong>
            </li>
          </ul>
          <!-- /skill-bars -->
        </div>
        <div class="col-six tab-half">
          <ul class="skill-bars">
            <li
              v-for="skill in skills.slice(skills.length / 2, skills.length)"
              v-bind:key="skill"
            >
              <div :class="'progress percent' + skill.percent">
                <span>{{ skill.percent }}%</span>
              </div>
              <strong>{{ skill.title }}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row button-section">
      <div class="col-twelve">
        <a
          href="#contact"
          title="Hire Me"
          class="button stroke smoothscroll gs_reveal gs_reveal_fromLeft"
          style="transform: translateX(-20%)"
          >Hire Me</a
        >
        <a
          href="https://berkegokner.com/berke_gokner_cv.pdf"
          title="Download CV"
          class="button button-primary gs_reveal gs_reveal_fromRight"
          style="transform: translateX(20%)"
          >Download CV</a
        >
      </div>
    </div>
  </section>

  <!-- /process-->

  <section id="resume" class="grey-section">
    <div class="row section-intro">
      <div class="col-twelve gs_reveal gs_reveal_fromLeft">
        <h5>Resume</h5>
        <h1>More of my credentials.</h1>
      </div>
    </div>
  </section>
  <!-- /features -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  beforeCreate() {
    this.$store.dispatch("setDataResume");
    this.$store.dispatch("setSkills");
  },
  created(){
    window.addEventListener("storage", this.updateFromStorage);
  },
  computed: {
    ...mapGetters({
      skills: "getSkills",
      resume: "_resume",
      name: "_name",
    }),
  },
  methods:{
    updateFromStorage(event) {
      if (event.key === "pageTitle") {
        this.$store.commit("updatePageTitle", event.newValue); 
      }
      if (event.key === "title") {
        this.$store.commit("updateTitle", event.newValue); 
      }
      if (event.key === "myImageSrc") {
        this.$store.commit("updateProfilePic", event.newValue); 
      }
      if (event.key === "AboutDesc") {
        this.$store.commit("updateDesc", event.newValue); 
      }
      if (event.key === "ProfileDesc") {
        this.$store.commit("updateProfileDesc", event.newValue); 
      }
      if (event.key === "BirthDate") {
        this.$store.commit("updateBirthDate", event.newValue); 
      }
      if (event.key === "Job") {
        this.$store.commit("updateJob", event.newValue); 
      }
      if (event.key === "Website") {
        this.$store.commit("updateWebsite", event.newValue); 
      }
      if (event.key === "Email") {
        this.$store.commit("updateEmail", event.newValue); 
      }
      if (event.key === "skills") {
      this.$store.commit("setSkillsFromLocalStorage", JSON.parse(event.newValue)); 
    }
    },
  }
};
</script>

<style>
.gs_reveal {
  opacity: 0;
  visibility: hidden;
  will-change: transform, opacity;
}
</style>
