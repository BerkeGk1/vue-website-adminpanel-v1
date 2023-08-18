<template>
  <div class="wrapper">
    <div class="row about-content about-content--timeline">
      <div class="col-six tab-full left">
        <div class="timeline">
          <div class="timeline__block gs_reveal gs_reveal_fromLeft">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">{{ experience.first.history }}</p>
              <h3>{{ experience.first.company }}</h3>
              <h5>{{ experience.first.title }}</h5>
            </div>
            <div class="timeline__desc">
              <p>
                <b>{{ experience.first.text1Title }}</b> <br />
                {{ experience.first.text1 }}<br />
                <b>{{ experience.first.text2Title }}</b> <br />
                {{ experience.first.text2 }}<br />

              
              </p>
            </div>
          </div>
          <!-- end timeline__block -->

          <div class="timeline__block gs_reveal gs_reveal_fromLeft">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">{{ experience.second.history }}</p>
              <h3>{{ experience.second.company }}</h3>
              <h5>{{ experience.second.title }}</h5>
            </div>
            <div class="timeline__desc">
              <p>
                <b>{{ experience.second.text1Title }}</b> <br />
                {{ experience.second.text1 }}<br />
                <b>{{ experience.second.text2Title }}</b> <br />
                {{ experience.second.text2 }}<br />
                <b>{{ experience.second.text3Title }}</b> <br />
                {{ experience.second.text3 }}<br />
                <b>{{ experience.second.text4Title }}</b> <br />
                {{ experience.second.text4 }}<br />
              </p>
            </div>
          </div>
          <!-- end timeline__block -->
        </div>
        <!-- end timeline -->
      </div>
      <!-- end left -->

      <div class="col-six tab-full right">
        <div class="timeline">
          <div class="timeline__block gs_reveal gs_reveal_fromRight">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">{{ experience.three.history }}</p>
              <h3>{{ experience.three.company }}</h3>
              <h5>{{ experience.three.title }}</h5>
            </div>
            <div class="timeline__desc">
              <p>
                {{ experience.three.text1 }}
              </p>
            </div>
          </div>
          <div class="timeline__block gs_reveal gs_reveal_fromRight">
            <div class="timeline__bullet"></div>
            <div class="timeline__header">
              <p class="timeline__timeframe">{{ education.history }}</p>
              <h3>{{ education.university }}</h3>
              <h5>{{ education.title }}</h5>
              <h5>{{ education.degree }}</h5>
            </div>
            <div class="timeline__desc">
              <p>
                {{ education.text }}
              </p>
            </div>
          </div>
          <!-- end timeline__block -->
          <!-- end timeline__block -->
        </div>
        <!-- end timeline -->
      </div>
      <!-- end right -->
    </div>
    <!-- end about-content timeline -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  beforeCreate() {
    this.$store.dispatch("setDataTimeLine");
  },
  created(){
    window.addEventListener("storage", this.updateFromStorage);
  },
  computed: {
    ...mapGetters({
      education: "_education",
      experience: "_experience",
    }),
  },
  methods:{
    updateFromStorage(event) {
      if (event.key === "FirstPeriod") {
        this.$store.commit("updateFirstPeriod", event.newValue); 
      }
      if (event.key === "FirstCompany") {
        this.$store.commit("updateFirstCompany", event.newValue); 
      }
      if (event.key === "FirstTitle") {
        this.$store.commit("updateFirstTitle", event.newValue); 
      }
      if (event.key === "FirstFirstResponsibility") {
        this.$store.commit("updateFirstFirstResponsibility", event.newValue); 
      }
      if (event.key === "FirstFirstResponsibilityDesc") {
        this.$store.commit("updateFirstFirstResponsibilityDesc", event.newValue); 
      }
      if (event.key === "FirstSecondResponsibility") {
        this.$store.commit("updateFirstSecondResponsibility", event.newValue); 
      }
      if (event.key === "FirstSecondResponsibilityDesc") {
        this.$store.commit("updateFirstSecondResponsibilityDesc", event.newValue); 
      }
      if (event.key === "SecondPeriod") {
        this.$store.commit("updateSecondPeriod", event.newValue); 
      }
      if (event.key === "SecondCompany") {
        this.$store.commit("updateSecondCompany", event.newValue); 
      }
      if (event.key === "SecondTitle") {
        this.$store.commit("updateSecondTitle", event.newValue); 
      }
      if (event.key === "SecondFirstResponsibility") {
        this.$store.commit("updateSecondFirstResponsibility", event.newValue); 
      }
      if (event.key === "SecondFirstResponsibilityDesc") {
        this.$store.commit("updateSecondFirstResponsibilityDesc", event.newValue); 
      }
      if (event.key === "SecondSecondResponsibility") {
        this.$store.commit("updateSecondSecondResponsibility", event.newValue); 
      }
      if (event.key === "SecondSecondResponsibilityDesc") {
        this.$store.commit("updateSecondSecondResponsibilityDesc", event.newValue); 
      }
      if (event.key === "SecondThreeResponsibility") {
        this.$store.commit("updateSecondThreeResponsibility", event.newValue); 
      }
      if (event.key === "SecondThreeResponsibilityDesc") {
        this.$store.commit("updateSecondThreeResponsibilityDesc", event.newValue); 
      }
      if (event.key === "SecondFourResponsibility") {
        this.$store.commit("updateSecondFourResponsibility", event.newValue); 
      }
      if (event.key === "SecondFourResponsibilityDesc") {
        this.$store.commit("updateSecondFourResponsibilityDesc", event.newValue); 
      }
      if (event.key === "ThreePeriod") {
        this.$store.commit("updateThreePeriod", event.newValue); 
      }
      if (event.key === "ThreeCompany") {
        this.$store.commit("updateThreeCompany", event.newValue); 
      }
      if (event.key === "ThreeTitle") {
        this.$store.commit("updateThreeTitle", event.newValue); 
      }
      if (event.key === "ThreeFirstResponsibility") {
        this.$store.commit("updateThreeFirstResponsibility", event.newValue); 
      }
      if (event.key === "ThreeFirstResponsibilityDesc") {
        this.$store.commit("updateThreeFirstResponsibilityDesc", event.newValue); 
      }

    },
  }
};
</script>


<style scoped>
body {
  margin: 0;
  height: 100vh;
}

.wrapper {
  overflow-x: hidden;
  position: relative;
  background-color: #ebebeb;
}

.timeline {
  position: relative;
  text-align: left;
  margin-top: 3.6rem;
}

.timeline::before {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 2rem;
  top: 0;
}

.timeline__block {
  position: relative;
  padding-left: 8rem;
  min-height: 28.8rem;
}

.timeline__bullet {
  background: #0d0a0b;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  margin-left: -0.75rem;
  box-shadow: 0 0 0 9px #e9e9e9;
  position: absolute;
  left: 2rem;
  top: 0.3rem;
}

.timeline__header .timeline__timeframe {
  font-size: 1.4rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.9rem;
  font-family: "montserrat-bold", sans-serif;
}

.timeline__header h3 {
  line-height: 1.25;
  margin: 0 0 0.3rem 0;
}

.timeline__header h5 {
  margin-top: 0;
}

.timeline__desc p {
  margin: 0;
  padding-bottom: 3rem;
}
</style>

