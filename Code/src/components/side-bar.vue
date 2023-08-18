<template>
  <aside class="sidebar">
    <div class="branding">
        <img :src="logo" alt="" />
        <p>Admin Panel v1</p>
      </div>
    <div id="leftside-navigation" class="nano">
      <ul class="nano-content">
        <li class="sub-menu">
          <a id="a1" href="javascript:void(0);"
            ><i class="fa fa-cogs"></i><span>UI Elements</span
            ><i class="arrow fa fa-angle-right pull-right"></i
          ></a>
          <ul id="sub1">
            <li>
              <a @click.prevent="openIntro()" href="#">Intro</a>
            </li>
            <li><a id="a2" href="javascript:void(0);">About &amp; Skills <i class="arrow fa fa-angle-right pull-right"></i></a><ul id="sub2">
            <li>
              <a @click.prevent="openAbout()" href="#" class="indented"><i class="arrow fa fa-angle-right pull-left"></i>About</a>
            </li>
            <li>
              <a @click.prevent="openSkills()" href="#" class="indented"><i class="arrow fa fa-angle-right pull-left"></i>Skills</a>
            </li>
          </ul></li>
            <li><a @click.prevent="openResume()" href="#">Resume</a></li>
            <li>
              <a @click.prevent="openPortfolio()" href="#">Portfolio &amp; Modals</a>
            </li>
            
            <li><a @click.prevent="openServices()" href="#">Services</a></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
import { mapGetters } from "vuex";
export default {

  beforeCreate() {
    this.$store.dispatch("setPageImages");
  },
  methods: {
    openIntro() {
    this.$store.commit('setActiveComponent', 'intro')
  },
  openAbout() {
    this.$store.commit('setActiveComponent', 'about')
  },
  openResume() {
    this.$store.commit('setActiveComponent', 'resume')
  },
  openPortfolio() {
    this.$store.commit('setActiveComponent', 'portfolio')
  },
  openServices() {
    this.$store.commit('setActiveComponent', 'services')
  },
  openSkills() {
    this.$store.commit('setActiveComponent', 'skills')
  },
  },
  computed: {
    ...mapGetters({
      logo: "_logo",
    }),
  },
};
</script>
<style scoped>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css");
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0B4gaVc.ttf)
    format("truetype");
}
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.ttf)
    format("truetype");
}
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVc.ttf)
    format("truetype");
}
body {
  color: #5d5f63;
  background: #293949;
  font-family: "Open Sans", sans-serif;
  padding: 0;
  margin: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
.branding {
    display: flex;
    align-items: center;
}

.branding img {
    width: 100px;
    transition: 0.5s;
}
.branding p {
  margin-top: 20px;
  color: #aeb2b7;
}
.sidebar-toggle {
  margin-left: -240px;
}
.sidebar {
  width: 240px;
  height: 100%;
  background: #293949;
  position: absolute;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  
}
.sidebar #leftside-navigation ul,
.sidebar #leftside-navigation ul ul {
  margin: -2px 0 0;
  padding: 0;
}
.sidebar #leftside-navigation ul li {
  list-style-type: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.sidebar #leftside-navigation ul li.active > a {
  color: #1abc9c;
}
.sidebar #leftside-navigation ul li.active ul {
  display: block;
}
.sidebar #leftside-navigation ul li a {
  color: #aeb2b7;
  text-decoration: none;
  display: block;
  padding: 18px 0 18px 25px;
  font-size: 12px;
  outline: 0;
  -webkit-transition: all 200ms ease-in;
  -moz-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  -ms-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
}
.sidebar #leftside-navigation ul li a:hover {
  color: #1abc9c;
}
.sidebar #leftside-navigation ul li a span {
  display: inline-block;
}
.sidebar #leftside-navigation ul li a i {
  width: 20px;
}
.sidebar #leftside-navigation ul li a i .fa-angle-left,
.sidebar #leftside-navigation ul li a i .fa-angle-right {
  padding-top: 3px;
}
.sidebar #leftside-navigation ul ul {
  display: none;
}
.sidebar #leftside-navigation ul ul li {
  background: #23313f;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  border-bottom: none;
}
.sidebar #leftside-navigation ul ul li a {
  font-size: 12px;
  padding-top: 13px;
  padding-bottom: 13px;
  color: #aeb2b7;
}
.indented {
  text-indent: 20px; 
}
</style>
