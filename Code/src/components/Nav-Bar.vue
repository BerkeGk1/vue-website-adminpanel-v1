<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img src="images/BG-logo.webp" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation-nav">
        <li><a href="#about" class="link">About</a></li>
        <li><a href="#resume" class="link">Resume</a></li>
        <li><a href="#portfolio" class="link">Portfolio</a></li>
        <li><a href="#cta" class="link">Projects</a></li>
        <li><a href="#services" class="link">Services</a></li>
        <li><a href="#contact" class="link">Contact</a></li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fas fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a href="#about" class="link">About</a></li>
          <li><a href="#resume" class="link">Resume</a></li>
          <li><a href="#portfolio" class="link">Portfolio</a></li>
          <li><a href="#cta" class="link">Projects</a></li>
          <li><a href="#services" class="link">Services</a></li>
          <li><a href="#contact" class="link">Contact</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation-nav",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.setupSmoothScroll();
    
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    setupSmoothScroll() {
      var links = document.querySelectorAll('a[href^="#"]');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
          event.preventDefault();
          var target = document.getElementById(this.hash.substring(1));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgba($color: #000000, $alpha: 0.2);
  z-index: 99;
  width: 100%;
  line-height: 1em;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
  @media screen and (max-width: 1140px) {
    width: 100%;
  }

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
  }
  ul,
  .link {
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
  }
  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
    margin-top: 18.6px;
  }
  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    &:hover {
      color: #88cce4;
      border-color: #88cce4;
    }
  }
  .branding {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      transition: 0.5s;
    }
  }

  .navigation-nav {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;

    i {
      cursor: pointer;
      font-size: 30px;
      margin-right: 20px;
      transition: 0.8s ease all;
    }
  }

  .icon-active {
    transform: rotate(180deg);
    font-family: "Font Awesome 6 Free" !important;
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;

    li {
      margin-left: 0;
      .link {
        color: #000000;
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }
  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
}
.scrolled-nav {
  background-color: rgba($color: #000000, $alpha: 0.4);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  line-height: 1.1em;

  nav {
    padding: 4px 0;

    .branding {
      img {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
