<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("initAuth");
  },
};
</script>
