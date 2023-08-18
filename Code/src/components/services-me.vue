<template>
  <section
    id="services"
    :style="{ backgroundImage: 'url(' + services_background + ')' }"
  >
    <div class="overlay"></div>
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>{{ mainTitle }}</h5>
        <h1>{{ mainSubTitle }}</h1>

        <p class="lead">
          {{ mainDesc }}
        </p>
      </div>
    </div>

    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
    >
      <!-- First İtem-->
      <div class="carousel-inner">
        <div class="carousel-item active row-center">
          <!-- 1 -->
          <div class="row services-content">
            <div
              id="owl-slider"
              class="services-list col-md-4"
              v-for="service in services.slice(0, services.length / 2)"
              v-bind:key="service"
            >
              <div class="service">
                <span class="icon"><i :class="service.icon"></i></span>

                <div class="service-content">
                  <h3>{{ service.title }}</h3>

                  <p class="desc">
                    {{ service.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Second Group İtem-->

        <div class="carousel-item row-center">
          <!--2-->
          <div class="row services-content">
            <div
              id="owl-slider"
              class="services-list col-md-4"
              v-for="service in services.slice(
                services.length / 2,
                services.length
              )"
              v-bind:key="service"
            >
              <div class="service">
                <span class="icon"><i :class="service.icon"></i></span>

                <div class="service-content">
                  <h3>{{ service.title }}</h3>

                  <p class="desc">
                    {{ service.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  beforeCreate() {
    this.$store.dispatch("setServicesData");
    this.$store.dispatch("setServicesTexts");
  },
  created() {
    window.addEventListener("storage", this.updateFromStorage);
  },
  computed: {
    ...mapGetters({
      services: "getServices",
      services_background: "_services_background",
      mainTitle: "getMainTitle",
      mainDesc: "getMainDesc",
      mainSubTitle: "getMainSubTitle",
    }),
  },
  methods: {
    updateFromStorage(event) {
      if (event.key === "Service1_Text") {
        this.$store.commit("update_Service1_Text", event.newValue);
      }
      if (event.key === "Service1_Title") {
        this.$store.commit("update_Service1_Title", event.newValue);
      }
      if (event.key === "Service1_Icon") {
        this.$store.commit("update_Service1_Icon", event.newValue);
      } //=============//
      if (event.key === "Service2_Text") {
        this.$store.commit("update_Service2_Text", event.newValue);
      }
      if (event.key === "Service2_Title") {
        this.$store.commit("update_Service2_Title", event.newValue);
      }
      if (event.key === "Service2_Icon") {
        this.$store.commit("update_Service2_Icon", event.newValue);
      }
      //=============//
      if (event.key === "Service3_Text") {
        this.$store.commit("update_Service3_Text", event.newValue);
      }
      if (event.key === "Service3_Title") {
        this.$store.commit("update_Service3_Title", event.newValue);
      }
      if (event.key === "Service3_Icon") {
        this.$store.commit("update_Service3_Icon", event.newValue);
      }
      //=============//
      if (event.key === "Service4_Text") {
        this.$store.commit("update_Service4_Text", event.newValue);
      }
      if (event.key === "Service4_Title") {
        this.$store.commit("update_Service4_Title", event.newValue);
      }
      if (event.key === "Service4_Icon") {
        this.$store.commit("update_Service4_Icon", event.newValue);
      }
      //=============//
      if (event.key === "Service5_Text") {
        this.$store.commit("update_Service5_Text", event.newValue);
      }
      if (event.key === "Service5_Title") {
        this.$store.commit("update_Service5_Title", event.newValue);
      }
      if (event.key === "Service5_Icon") {
        this.$store.commit("update_Service5_Icon", event.newValue);
      }
      //=============//
      if (event.key === "Service6_Text") {
        this.$store.commit("update_Service6_Text", event.newValue);
      }
      if (event.key === "Service6_Title") {
        this.$store.commit("update_Service6_Title", event.newValue);
      }
      if (event.key === "Service6_Icon") {
        this.$store.commit("update_Service6_Icon", event.newValue);
      }
    },
  },
};
</script>
