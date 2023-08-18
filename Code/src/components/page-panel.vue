<template>
  <div class="content-wrapper">
    <div class="col-6 demosite">
      <aboutInput v-if="activeComponent === 'about'" />
      <introInput v-if="activeComponent === 'intro'" />
      <portfolioInput v-if="activeComponent === 'portfolio'" />
      <projectInput v-if="activeComponent === 'projects'" />
      <resumeInput v-if="activeComponent === 'resume'" />
      <servicesInput v-if="activeComponent === 'services'" />
      <skillsInput v-if="activeComponent=== 'skills'"/>
    </div>
    <div class="col-6" id="background">
      <div class="iframe-container">
        <div class="device-buttons">
          <ion-icon
            @click="switchToMobile"
            class="icon"
            name="phone-portrait-outline"
          ></ion-icon>
          <ion-icon
            @click="switchToTablet"
            class="icon"
            name="tablet-portrait-outline"
            
          ></ion-icon>
          <ion-icon
            @click="switchToDesktop"
            class="icon"
            name="laptop-outline"
          ></ion-icon>
        </div>

        <div id="iphone-x" v-show="showMobile">
          <iframe
            id="content-iframe"
            class="content-iframe"
            src="#/demo" 
            
          ></iframe>
        </div>
        <div id="ipad" v-show="showTablet">
          <iframe
            id="content-iframe2"
            class="content-iframe"
            src="#/demo"
          ></iframe>
        </div>
        <div class="laptop" v-show="showDesktop">
          <div class="screen-outer">
            <div class="screen-inner">
              <iframe
                id="content-iframe3"
                class="content-iframe"
                src="#/demo"
                v-show="showDesktop"
              ></iframe>
            </div>
            <div class="bottom-strip">
              <span>BG</span>
            </div>
          </div>
          <div class="keyboard"></div>
          <div class="base"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import introInput from "../components/inputs/intro-input.vue";
import aboutInput from "../components/inputs/about-input.vue";
import portfolioInput from "../components/inputs/portfolio-input.vue";
import resumeInput from "../components/inputs/resume-input.vue";
import servicesInput from "../components/inputs/services-input.vue";
import skillsInput from "./inputs/skills-input.vue";

export default {
  data() {
    return {
      scaleFactor: 1.0, // Ölçek faktörü (1.0 varsayılan boyut)
      showMobile: false,
      showTablet: false,
      showDesktop: false,
    };
  },
  async beforeCreate() {
    await this.$store.dispatch("setSubTexts");
    await this.$store.dispatch("setTitles");
    await this.$store.dispatch("setImages");
    await this.$store.dispatch("setServicesData");
    await this.$store.dispatch("setServicesTexts");
    this.switchToMobile();
  },
  components: {
    introInput,
    aboutInput,
    resumeInput,
    portfolioInput,
    servicesInput,
    skillsInput,
  },
  methods: {
    switchToMobile() {
      const iframe = document.getElementById("content-iframe");
      iframe.style.width = "400px"; 
      iframe.style.height = "800px"; 
      iframe.style.borderRadius = "32px";
      const widthScaleFactor = 0.435; 
      const heightScaleFactor = 0.491; 
      iframe.style.transform = `scale(${widthScaleFactor}, ${heightScaleFactor})`;
      iframe.style.transformOrigin = "left top";
      this.showDesktop = false;
      this.showTablet = false;
      this.showMobile = true;
    },
    switchToTablet() {
      const iframe = document.getElementById("content-iframe2");
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.borderRadius = "14px";
      var currentWidth = iframe.style.width;
      var newWidth = currentWidth - 6;
      iframe.style.width = newWidth + "px";
      this.showMobile = false;
      this.showDesktop = false;
      this.showTablet = true;
    },
    switchToDesktop() {
      const iframe = document.getElementById("content-iframe3");
      iframe.style.width = "1920px"; 
      iframe.style.height = "1080px"; 
      iframe.style.marginBottom="1vh"

      iframe.style.borderRadius = "32px";
      const widthScaleFactor = 0.3; 
      const heightScaleFactor = 0.388; 


      iframe.style.transform = `scale(${widthScaleFactor}, ${heightScaleFactor})`;
      iframe.style.transformOrigin = "left top";
      this.showMobile = false;
      this.showTablet = false;
      this.showDesktop = true;
    },
  },
  computed: {
  activeComponent() {
    return this.$store.getters.activeComponent;
  },},
};
</script>
<style scoped>
.content-wrapper {
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  height: 100vh;
  background: rgb(249,249,249);
background: linear-gradient(45deg, rgba(249,249,249,1) 0%, rgba(183,242,195,1) 54%, rgba(249,249,249,1) 100%);
  background-size: cover;
}
#content-iframe {
  height: 406.8px;
  width: 188.4px;
  display: inline-block;
  position: absolute;
  border: 8px solid #080808;
  border-radius: 26.4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  
}
#content-iframe3 {
  
  position: absolute;
  transform-origin: top left; 
  transform: scale(
    var(--scaleFactor)
  ); 
  border: none;
  z-index: 5;

  
  
}

.router-view {
  flex: 1;
  width: 80%; 
}
.iframe-container {
  justify-content: center;
  display: grid;
}

#ipad {
  height: 380px;
  width: 507px;
  display: inline-block;

  border: 6px solid #080808;
  border-radius: 20px;
  box-shadow: 0 17px 34px rgba(0, 0, 0, 0.3), 0 13px 10px rgba(0, 0, 0, 0.22);
}
.laptop {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.screen-outer {
  position: relative;
  background-color: #000;
  width: 60rem;
  height: 45rem;
  border-radius: 25px;
}
.screen-inner {
  position: absolute;
  top: 2rem;
  left: 1rem;
  height: calc(100% - 4rem);
  width: calc(100% - 2rem);
  background-color: transparent;
}
.bottom-strip {
  width: 100%;
  height: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  bottom: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom-strip span {
  position: relative;
  top: -2px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 5px;
}

.keyboard {
  position: relative;
  width: 64rem;
  height: 1.4rem;
  background: #494949;
  bottom: 0.9rem;
  border-radius: 3px 3px 0 0;
}

.base {
  position: relative;
  bottom: 1rem;
  width: 60rem;
  height: 1rem;
  background: #3a3a3a;
  border-bottom-left-radius: 50% 60%;
  border-bottom-right-radius: 60% 50%;
}

.device-buttons {
  justify-content: center;
  display: flex;
  margin-bottom: 5vw;
}
.icon {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-top: 10%;
  cursor: pointer;
}
.icon:hover {
  animation: shake 1s;

  animation-iteration-count: infinite;
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(-10deg);
  }
  80% {
    transform: rotate(10deg);
  }
  90% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
