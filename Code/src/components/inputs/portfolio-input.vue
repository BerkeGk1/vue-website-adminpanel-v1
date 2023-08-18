<template>
  <div class="row">
    <div class="coolinput">
      <div class="col-12">
        <div class="accordion" id="SectorAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="currentSector">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCurrentSector"
                aria-expanded="true"
                aria-controls="collapseCurrentSector"
              >
                Sector 1
              </button>
            </h2>
            <div
              id="collapseCurrentSector"
              class="accordion-collapse collapse show"
              aria-labelledby="currentSector"
              data-bs-parent="#SectorAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Sector1_MainText"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Sector1_MainTitle"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Image:</label>
                  <input type="text" v-model="new_Sector1_Img" class="input" />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="previousSector">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePreviousSector"
                aria-expanded="false"
                aria-controls="collapsePreviousSector"
              >
                Sector 2
              </button>
            </h2>
            <div
              id="collapsePreviousSector"
              class="accordion-collapse collapse"
              aria-labelledby="previousSector"
              data-bs-parent="#SectorAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Sector2_MainText"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Sector2_MainTitle"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Image:</label>
                  <input type="text" v-model="new_Sector2_Img" class="input" />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherSector">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherSector"
                aria-expanded="false"
                aria-controls="collapseAnotherSector"
              >
                Sector 3
              </button>
            </h2>
            <div
              id="collapseAnotherSector"
              class="accordion-collapse collapse"
              aria-labelledby="anotherSector"
              data-bs-parent="#SectorAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Sector3_MainText"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Sector3_MainTitle"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Image:</label>
                  <input type="text" v-model="new_Sector3_Img" class="input" />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherSector">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherSector1"
                aria-expanded="false"
                aria-controls="collapseAnotherSector1"
              >
                Sector 4
              </button>
            </h2>
            <div
              id="collapseAnotherSector1"
              class="accordion-collapse collapse"
              aria-labelledby="anotherSector"
              data-bs-parent="#SectorAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Sector4_MainText"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Sector4_MainTitle"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Image:</label>
                  <input type="text" v-model="new_Sector4_Img" class="input" />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherSector">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherSector2"
                aria-expanded="false"
                aria-controls="collapseAnotherSector2"
              >
                Sector 5
              </button>
            </h2>
            <div
              id="collapseAnotherSector2"
              class="accordion-collapse collapse"
              aria-labelledby="anotherSector"
              data-bs-parent="#SectorAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Sector5_MainText"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Sector5_MainTitle"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Image:</label>
                  <input type="text" v-model="new_Sector5_Img" class="input" />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherSector">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherSector3"
                aria-expanded="false"
                aria-controls="collapseAnotherSector3"
              >
                Sector 6
              </button>
            </h2>
            <div
              id="collapseAnotherSector3"
              class="accordion-collapse collapse"
              aria-labelledby="anotherSector"
              data-bs-parent="#SectorAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Sector6_MainText"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Sector6_MainTitle"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Image:</label>
                  <input type="text" v-model="new_Sector6_Img" class="input" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    //SECTOR 1
    new_Sector1_MainText: {
      get() {
        return this.$store.state.modal.subTexts[0].subText;
      },
      set(value) {
        this.update_Sector1_MainText(value);
      },
    },
    new_Sector1_MainTitle: {
      get() {
        return this.$store.state.modal.titles[0].title;
      },
      set(value) {
        this.update_Sector1_MainTitle(value);
      },
    },
    new_Sector1_Img: {
      get() {
        return "URL"
      },
      set(value) {
        this.update_Sector1_Img(value);
      },
    },
    //SECTOR 2
    new_Sector2_MainText: {
      get() {
        return this.$store.state.modal.subTexts[1].subText;
      },
      set(value) {
        this.update_Sector2_MainText(value);
      },
    },
    new_Sector2_MainTitle: {
      get() {
        return this.$store.state.modal.titles[1].title;
      },
      set(value) {
        this.update_Sector2_MainTitle(value);
      },
    },
    new_Sector2_Img: {
      get() {
        return "URL"
      },
      set(value) {
        this.update_Sector2_Img(value);
      },
    },
    //SECTOR 3
    new_Sector3_MainText: {
      get() {
        return this.$store.state.modal.subTexts[2].subText;
      },
      set(value) {
        this.update_Sector3_MainText(value);
      },
    },
    new_Sector3_MainTitle: {
      get() {
        return this.$store.state.modal.titles[2].title;
      },
      set(value) {
        this.update_Sector3_MainTitle(value);
      },
    },
    new_Sector3_Img: {
      get() {
        return "URL"
      },
      set(value) {
        this.update_Sector3_Img(value);
      },
    },
    //SECTOR 4
    new_Sector4_MainText: {
      get() {
        return this.$store.state.modal.subTexts[3].subText;
      },
      set(value) {
        this.update_Sector4_MainText(value);
      },
    },
    new_Sector4_MainTitle: {
      get() {
        return this.$store.state.modal.titles[3].title;
      },
      set(value) {
        this.update_Sector4_MainTitle(value);
      },
    },
    new_Sector4_Img: {
      get() {
        return "URL"
      },
      set(value) {
        this.update_Sector4_Img(value);
      },
    },
    //SECTOR 5
    new_Sector5_MainText: {
      get() {
        return this.$store.state.modal.subTexts[4].subText;
      },
      set(value) {
        this.update_Sector5_MainText(value);
      },
    },
    new_Sector5_MainTitle: {
      get() {
        return this.$store.state.modal.titles[4].title;
      },
      set(value) {
        this.update_Sector5_MainTitle(value);
      },
    },
    new_Sector5_Img: {
      get() {
        return "URL"
      },
      set(value) {
        this.update_Sector5_Img(value);
      },
    },
    //SECTOR 6
    new_Sector6_MainText: {
      get() {
        return this.$store.state.modal.subTexts[5].subText;
      },
      set(value) {
        this.update_Sector6_MainText(value);
      },
    },
    new_Sector6_MainTitle: {
      get() {
        return this.$store.state.modal.titles[5].title;
      },
      set(value) {
        this.update_Sector6_MainTitle(value);
      },
    },
    new_Sector6_Img: {
      get() {
        return "URL"
      },
      set(value) {
        this.update_Sector6_Img(value);
      },
    },
  },
  methods: {
    update_Sector1_MainText(value) {
      this.$store.commit("update_Sector1_MainText", value);
    },
    update_Sector1_MainTitle(value) {
      this.$store.commit("update_Sector1_MainTitle", value);
    },
    update_Sector1_Img(value) {
      this.$store.commit("update_Sector1_Img", value);
    },//==================//
    update_Sector2_MainText(value) {
      this.$store.commit("update_Sector2_MainText", value);
    },
    update_Sector2_MainTitle(value) {
      this.$store.commit("update_Sector2_MainTitle", value);
    },
    update_Sector2_Img(value) {
      this.$store.commit("update_Sector2_Img", value);
    },
    //==================//
    update_Sector3_MainText(value) {
      this.$store.commit("update_Sector3_MainText", value);
    },
    update_Sector3_MainTitle(value) {
      this.$store.commit("update_Sector3_MainTitle", value);
    },
    update_Sector3_Img(value) {
      this.$store.commit("update_Sector3_Img", value);
    },
    //==================//
    update_Sector4_MainText(value) {
      this.$store.commit("update_Sector4_MainText", value);
    },
    update_Sector4_MainTitle(value) {
      this.$store.commit("update_Sector4_MainTitle", value);
    },
    update_Sector4_Img(value) {
      this.$store.commit("update_Sector4_Img", value);
    },
    //==================//
    update_Sector5_MainText(value) {
      this.$store.commit("update_Sector5_MainText", value);
    },
    update_Sector5_MainTitle(value) {
      this.$store.commit("update_Sector5_MainTitle", value);
    },
    update_Sector5_Img(value) {
      this.$store.commit("update_Sector5_Img", value);
    },
    //==================//
    update_Sector6_MainText(value) {
      this.$store.commit("update_Sector6_MainText", value);
    },
    update_Sector6_MainTitle(value) {
      this.$store.commit("update_Sector6_MainTitle", value);
    },
    update_Sector6_Img(value) {
      this.$store.commit("update_Sector6_Img", value);
    },
  },
};
</script>

<style scoped>

.accordion-button {
  background-color: #2c3e50;
  color: #ffffff;
  font-weight: 600;
  border: none;
  text-align: left;
  transition: all 0.3s;
  
}


.accordion-button:not(.collapsed) {
  background-color: #34495e;
  color: #ecf0f1;
  
}
.accordion-body {
  font-size: 16px;

  padding: 0px;
  color: #2c3e50;
}

.accordion-button:hover {
  background-color: #34495e;
  color: #1abc9c;
}

.accordion-collapse {
  margin: 10px 0;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.accordion-item {
  background: none;
  border: none;
}

.coolinput {
  margin: 40px 20px 20px 20px;
  background-color: rgba(249, 249, 249, 0.7);
  border: 2px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1); 
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.5s ease; 
}

.coolinput:focus-within {
  box-shadow: 0 0 15px #1abc9c; 
}

.col-12 {
  flex: 100%;
  max-width: 100%;
  margin-top: 3rem;
}

.col-4 {
  flex: 33.33%;
  max-width: 33.33%;
  margin: 0;
}

.text {
  color: #555;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.input {
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  font-size: 16px;
  
  background-size: 200% 100%;
  transition: all 0.5s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  animation: gradient 3s linear infinite;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 15px #1abc9c; 
  background-position: 200% 100%;
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}
</style>