<template>
  <!-- Portfolio Section
   ================================================== -->
  <section id="portfolio">
    <div class="row section-intro">
      <div class="col-twelve gs_reveal gs_reveal_fromLeft">
        <h5>Portfolio</h5>
        <h1>Check Out Some of My Works.</h1>

        <p class="lead">
          You can explore projects in various fields, ranging from artificial
          intelligence, web design, and mechanical design to analysis, material
          dynamics, and behavior.
        </p>
      </div>
    </div>
    <!-- /section-intro-->

    <div class="row portfolio-content">
      <div class="col-twelve">
        <Modal1 v-show="showModal" @close-modal="closeModal" />
        <!-- portfolio-wrapper -->
        <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
          <div
            class="bgrid folio-item gs_reveal gs_reveal_fromLeft skewElem tilt"
          >
            <div class="item-wrap">
              <img
                :src="images[0].images"
                v-for="image in images.slice(0, 1)"
                v-bind:key="image"
              />
              <a @click.prevent="openModal(1)" href="#" class="overlay">
                <div class="folio-item-table">
                  <div
                    class="folio-item-cell"
                    v-for="subText in subTexts.slice(0, 1)"
                    v-bind:key="subText"
                  >
                    <h3
                      class="folio-title"
                      v-for="title in titles.slice(0, 1)"
                      v-bind:key="title"
                    >
                      {{ titles[0].title }}
                    </h3>
                    <span class="folio-types"> {{ subTexts[0].subText }} </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- /folio-item -->
          <div class="bgrid folio-item gs_reveal gs_reveal_fromRight skewElem">
            <div class="item-wrap">
              <img
                :src="images[1].images"
                v-for="image in images.slice(0, 1)"
                v-bind:key="image"
              />
              <a @click.prevent="openModal(2)" href="#" class="overlay">
                <div class="folio-item-table">
                  <div
                    class="folio-item-cell"
                    v-for="subText in subTexts.slice(0, 1)"
                    v-bind:key="subText"
                  >
                    <h3
                      class="folio-title"
                      v-for="title in titles.slice(0, 1)"
                      v-bind:key="title"
                    >
                      {{ titles[1].title }}
                    </h3>
                    <span class="folio-types"> {{ subTexts[1].subText }} </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="bgrid folio-item gs_reveal gs_reveal_fromLeft skewElem">
            <div class="item-wrap">
              <img
                :src="images[2].images"
                
                v-for="image in images.slice(0, 1)"
                v-bind:key="image"
              />
              <a @click.prevent="openModal(3)" href="#" class="overlay">
                <div class="folio-item-table">
                  <div
                    class="folio-item-cell"
                    v-for="subText in subTexts.slice(0, 1)"
                    v-bind:key="subText"
                  >
                    <h3
                      class="folio-title"
                      v-for="title in titles.slice(0, 1)"
                      v-bind:key="title"
                    >
                      {{ titles[2].title }}
                    </h3>
                    <span class="folio-types"> {{ subTexts[2].subText }} </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- /folio-item -->
          <div class="bgrid folio-item gs_reveal gs_reveal_fromRight skewElem">
            <div class="item-wrap">
              <img
                :src="images[3].images"
                
                v-for="image in images.slice(0, 1)"
                v-bind:key="image"
              />
              <a @click.prevent="openModal(4)" href="#" class="overlay">
                <div class="folio-item-table">
                  <div
                    class="folio-item-cell"
                    v-for="subText in subTexts.slice(0, 1)"
                    v-bind:key="subText"
                  >
                    <h3
                      class="folio-title"
                      v-for="title in titles.slice(0, 1)"
                      v-bind:key="title"
                    >
                      {{ titles[3].title }}
                    </h3>
                    <span class="folio-types"> {{ subTexts[3].subText }} </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- /folio-item -->
          <div class="bgrid folio-item gs_reveal gs_reveal_fromLeft skewElem">
            <div class="item-wrap">
              <img
                :src="images[4].images"
                
                v-for="image in images.slice(0, 1)"
                v-bind:key="image"
              />
              <a @click.prevent="openModal(5)" href="#" class="overlay">
                <div class="folio-item-table">
                  <div
                    class="folio-item-cell"
                    v-for="subText in subTexts.slice(0, 1)"
                    v-bind:key="subText"
                  >
                    <h3
                      class="folio-title"
                      v-for="title in titles.slice(0, 1)"
                      v-bind:key="title"
                    >
                      {{ titles[4].title }}
                    </h3>
                    <span class="folio-types"> {{ subTexts[4].subText }} </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- /folio-item -->
          <div class="bgrid folio-item gs_reveal gs_reveal_fromLeft skewElem">
            <div class="item-wrap">
              <img
                :src="images[5].images"
                
                v-for="image in images.slice(0, 1)"
                v-bind:key="image"
              />
              <a @click.prevent="openModal(6)" href="#" class="overlay">
                <div class="folio-item-table">
                  <div
                    class="folio-item-cell"
                    v-for="subText in subTexts.slice(0, 1)"
                    v-bind:key="subText"
                  >
                    <h3
                      class="folio-title"
                      v-for="title in titles.slice(0, 1)"
                      v-bind:key="title"
                    >
                      {{ titles[5].title }}
                    </h3>
                    <span class="folio-types">
                      {{ subTexts[5].subText }}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Modal1 from "./modal-1.vue";

export default {
  components: {
    Modal1,
  },
  async beforeCreate() {
    await this.$store.dispatch("setSubTexts");
    await this.$store.dispatch("setTitles");
    await this.$store.dispatch("setImages");
  },
  created(){
    window.addEventListener("storage", this.updateFromStorage);
  },
  computed: {
    ...mapGetters({
      modal: "_modal",
      subTexts: "_subTexts",
      titles: "_titles",
      images: "_images",
    }),
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal(itemId) {
      this.$store.dispatch("setModalData", itemId);

      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    updateFromStorage(event) {
      if (event.key === "Sector1_MainText") {
        this.$store.commit("update_Sector1_MainText", event.newValue); 
      }
      if (event.key === "Sector1_MainTitle") {
        this.$store.commit("update_Sector1_MainTitle", event.newValue); 
      }
      if (event.key === "Sector1_Img") {
        this.$store.commit("update_Sector1_Img", event.newValue); 
      }//=============//
      if (event.key === "Sector2_MainText") {
        this.$store.commit("update_Sector2_MainText", event.newValue); 
      }
      if (event.key === "Sector2_MainTitle") {
        this.$store.commit("update_Sector2_MainTitle", event.newValue); 
      }
      if (event.key === "Sector2_Img") {
        this.$store.commit("update_Sector2_Img", event.newValue); 
      }
      //=============//
      if (event.key === "Sector3_MainText") {
        this.$store.commit("update_Sector3_MainText", event.newValue); 
      }
      if (event.key === "Sector3_MainTitle") {
        this.$store.commit("update_Sector3_MainTitle", event.newValue); 
      }
      if (event.key === "Sector3_Img") {
        this.$store.commit("update_Sector3_Img", event.newValue); 
      }
      //=============//
      if (event.key === "Sector4_MainText") {
        this.$store.commit("update_Sector4_MainText", event.newValue); 
      }
      if (event.key === "Sector4_MainTitle") {
        this.$store.commit("update_Sector4_MainTitle", event.newValue); 
      }
      if (event.key === "Sector4_Img") {
        this.$store.commit("update_Sector4_Img", event.newValue); 
      }
      //=============//
      if (event.key === "Sector5_MainText") {
        this.$store.commit("update_Sector5_MainText", event.newValue); 
      }
      if (event.key === "Sector5_MainTitle") {
        this.$store.commit("update_Sector5_MainTitle", event.newValue); 
      }
      if (event.key === "Sector5_Img") {
        this.$store.commit("update_Sector5_Img", event.newValue); 
      }
      //=============//
      if (event.key === "Sector6_MainText") {
        this.$store.commit("update_Sector6_MainText", event.newValue); 
      }
      if (event.key === "Sector6_MainTitle") {
        this.$store.commit("update_Sector6_MainTitle", event.newValue); 
      }
      if (event.key === "Sector6_Img") {
        this.$store.commit("update_Sector6_Img", event.newValue); 
      }



    }
    
      
  },
};
</script>

<style>
.animate {
  transition: opacity 0.5s, transform 0.5s;
}
</style>
