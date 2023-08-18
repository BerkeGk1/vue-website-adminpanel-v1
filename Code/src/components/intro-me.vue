<template>
  <section
    id="intro"
    :style="{ backgroundImage: 'url(' + intro_background + ')' }"
  >
    <div class="intro-overlay"></div>

    <div class="intro-content">
      <div class="row">
        <div class="col-twelve">
          <transition appear @before-enter="beforeEnterX" @enter="enterX">
            <h5 class="yazi">{{ firstText }}</h5>
          </transition>
          <transition appear @before-enter="beforeEnterXa" @enter="enterXa">
            <h1>I'm {{ name }}</h1>
          </transition>

          <p class="intro-position">
            <span class="typed-text"> {{ typeValue }} </span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </p>
          <transition appear @before-enter="beforeEnterYa" @enter="enterYa">
            <a class="button stroke smoothscroll" href="#about" title="">{{
              buttonText
            }}</a></transition
          >
        </div>
      </div>
    </div>
    <!-- /intro-content -->
    <transition appear @before-enter="beforeEnterYa" @enter="enterYa">
      <ul class="intro-social">
        <li>
          <a href="https://tr-tr.facebook.com/berke.gokner"
            ><i class="fa-brands fa-facebook fa-lg"></i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/berkegokner/"
            ><i class="fa-brands fa-linkedin fa-lg"></i
          ></a>
        </li>
        <li>
          <a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a>
        </li></ul
    ></transition>
  </section>
</template>

<script>
import gsap from "gsap";
import { mapGetters } from "vuex";
export default {
  beforeCreate() {
    this.$store.dispatch("setIntroData");
  },
  created() {
    window.addEventListener("storage", this.updateFromStorage);
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    beforeEnterX(el) {
      el.style.opacity = "0";
      el.style.transform = "translateX(-100px)";
    },
    enterX(el) {
      gsap.to(el, {
        delay: 2,
        duration: 2,
        x: 0,
        opacity: 1,
      });
    },
    beforeEnterXa(el) {
      el.style.opacity = "0";
      el.style.transform = "translateX(+100px)";
    },
    enterXa(el) {
      gsap.to(el, {
        delay: 2,
        duration: 2,
        x: 0,
        opacity: 1,
      });
    },
    beforeEnterYa(el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(+100px)";
    },
    enterYa(el) {
      gsap.to(el, {
        delay: 2,
        duration: 2,
        y: 0,
        opacity: 1,
      });
    },
    delay(el) {
      gsap.to(el, {
        delay: 4,
      });
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    updateFromStorage(event) {
      if (event.key === "firstText") {
        this.$store.commit("updateFirstText", event.newValue); 
      }
      if (event.key === "name") {
        this.$store.commit("updateName", event.newValue); 
      }
      if (event.key === "buttonText") {
        this.$store.commit("updateButtonText", event.newValue); 
      }
      if (event.key === "myTitle1") {
        this.$store.commit("updateMyTitle1", event.newValue); 
      }
      if (event.key === "myTitle2") {
        this.$store.commit("updateMyTitle2", event.newValue); 
      }
      if (event.key === "myTitle3") {
        this.$store.commit("updateMyTitle3", event.newValue); 
      }
    },
  },
  computed: {
    ...mapGetters({
      firstText: "_firstText",
      name: "_name",
      myTitle: "_myTitle",
      buttonText: "_buttonText",
      intro_background: "_intro_background",
    }),
    typeArray() {
      return this.myTitle;
    },
  },
};
</script>
