<template>
  <transition name="modal-fade">
    <div id="modal-01" class="popup-modal slider" @click="closeModal()">
      <div class="media" @click.stop>
        <img :src="modal.imgSrc" alt="" />
      </div>

      <div class="description-box">
        <h4>{{ modal.title }}</h4>
        <p>
          {{ modal.titleDesc }}
        </p>

        <div class="categories">{{ modal.category }}</div>
      </div>

      <div class="link-box">
        <a @click.prevent="closeModal()" href="#">Close</a>
      </div>
    </div></transition
  >
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      modal: "_modal",
    }),
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
