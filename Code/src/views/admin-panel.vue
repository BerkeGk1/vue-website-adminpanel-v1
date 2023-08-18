<template>
  <section class="grey-section">
    <div class="wrapper">
      <div class="sidebar-wrapper">
        <sidebar />
      </div>
      <page />
    </div>
  </section>
</template>

<script>
import sidebar from "../components/side-bar.vue";
import page from "../components/page-panel.vue";

export default {
  components: {
    sidebar,
    page,
  },
  beforeCreate() {},
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
.wrapper {
  display: flex;

}

.sidebar-wrapper {
  flex: 0 0 auto;
  width: 240px; 
}
</style>
