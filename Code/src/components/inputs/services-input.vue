<template>
  <div class="row">
    <div class="coolinput">
      <div class="col-12">
        <div class="accordion" id="ServiceAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="currentService">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCurrentService"
                aria-expanded="true"
                aria-controls="collapseCurrentService"
              >
                Service 1
              </button>
            </h2>
            <div
              id="collapseCurrentService"
              class="accordion-collapse collapse show"
              aria-labelledby="currentService"
              data-bs-parent="#ServiceAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Service1_Text"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Service1_Title"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Icon:</label>
                  <input type="text" v-model="new_Service1_Icon" class="input" />
                  <small class="warning-text">Please use Fontawesome İcons. Thanks Fontawesome</small>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="previousService">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePreviousService"
                aria-expanded="false"
                aria-controls="collapsePreviousService"
              >
                Service 2
              </button>
            </h2>
            <div
              id="collapsePreviousService"
              class="accordion-collapse collapse"
              aria-labelledby="previousService"
              data-bs-parent="#ServiceAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Service2_Text"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Service2_Title"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Icon:</label>
                  <input type="text" v-model="new_Service2_Icon" class="input" />
                  <small class="warning-text">Please use Fontawesome İcons. Thanks Fontawesome</small>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherService">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherService"
                aria-expanded="false"
                aria-controls="collapseAnotherService"
              >
                Service 3
              </button>
            </h2>
            <div
              id="collapseAnotherService"
              class="accordion-collapse collapse"
              aria-labelledby="anotherService"
              data-bs-parent="#ServiceAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Service3_Text"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Service3_Title"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Icon:</label>
                  <input type="text" v-model="new_Service3_Icon" class="input" />
                  <small class="warning-text">Please use Fontawesome İcons. Thanks Fontawesome</small>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherService">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherService1"
                aria-expanded="false"
                aria-controls="collapseAnotherService1"
              >
                Service 4
              </button>
            </h2>
            <div
              id="collapseAnotherService1"
              class="accordion-collapse collapse"
              aria-labelledby="anotherService"
              data-bs-parent="#ServiceAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Service4_Text"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Service4_Title"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Icon:</label>
                  <input type="text" v-model="new_Service4_Icon" class="input" />
                  <small class="warning-text">Please use Fontawesome İcons. Thanks Fontawesome</small>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherService">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherService2"
                aria-expanded="false"
                aria-controls="collapseAnotherService2"
              >
                Service 5
              </button>
            </h2>
            <div
              id="collapseAnotherService2"
              class="accordion-collapse collapse"
              aria-labelledby="anotherService"
              data-bs-parent="#ServiceAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Service5_Text"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Service5_Title"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Icon:</label>
                  <input type="text" v-model="new_Service5_Icon" class="input" />
                  <small class="warning-text">Please use Fontawesome İcons. Thanks Fontawesome</small>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="anotherService">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnotherService3"
                aria-expanded="false"
                aria-controls="collapseAnotherService3"
              >
                Service 6
              </button>
            </h2>
            <div
              id="collapseAnotherService3"
              class="accordion-collapse collapse"
              aria-labelledby="anotherService"
              data-bs-parent="#ServiceAccordion"
            >
              <div class="accordion-body">
                <div class="col-4">
                  <label class="text">Text:</label>
                  <input
                    type="text"
                    v-model="new_Service6_Text"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Title:</label>
                  <input
                    type="text"
                    v-model="new_Service6_Title"
                    class="input"
                  />
                </div>
                <div class="col-4">
                  <label class="text">Icon:</label>
                  <input type="text" v-model="new_Service6_Icon" class="input" />
                  <small class="warning-text">Please use Fontawesome İcons. Thanks Fontawesome</small>
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
    //Service 1
    new_Service1_Text: {
      get() {
        return this.$store.state.services.services.servicesData[0].desc;
      },
      set(value) {
        this.update_Service1_Text(value);
      },
    },
    new_Service1_Title: {
      get() {
        return this.$store.state.services.services.servicesData[0].title;
      },
      set(value) {
        this.update_Service1_Title(value);
      },
    },
    new_Service1_Icon: {
      get() {
        return this.$store.state.services.services.servicesData[0].icon;
      },
      set(value) {
        this.update_Service1_Icon(value);
      },
    },
    //Service 2
    new_Service2_Text: {
      get() {
        return this.$store.state.services.services.servicesData[1].desc;
      },
      set(value) {
        this.update_Service2_Text(value);
      },
    },
    new_Service2_Title: {
      get() {
        return this.$store.state.services.services.servicesData[1].title;
      },
      set(value) {
        this.update_Service2_Title(value);
      },
    },
    new_Service2_Icon: {
      get() {
        return this.$store.state.services.services.servicesData[1].icon;
      },
      set(value) {
        this.update_Service2_Icon(value);
      },
    },
    //Service 3
    new_Service3_Text: {
      get() {
        return this.$store.state.services.services.servicesData[2].desc;
      },
      set(value) {
        this.update_Service3_Text(value);
      },
    },
    new_Service3_Title: {
      get() {
        return this.$store.state.services.services.servicesData[2].title;
      },
      set(value) {
        this.update_Service3_Title(value);
      },
    },
    new_Service3_Icon: {
      get() {
        return this.$store.state.services.services.servicesData[2].icon;
      },
      set(value) {
        this.update_Service3_Icon(value);
      },
    },
    //Service 4
    new_Service4_Text: {
      get() {
        return this.$store.state.services.services.servicesData[3].desc;
      },
      set(value) {
        this.update_Service4_Text(value);
      },
    },
    new_Service4_Title: {
      get() {
        return this.$store.state.services.services.servicesData[3].title;
      },
      set(value) {
        this.update_Service4_Title(value);
      },
    },
    new_Service4_Icon: {
      get() {
        return this.$store.state.services.services.servicesData[3].icon;
      },
      set(value) {
        this.update_Service4_Icon(value);
      },
    },
    //Service 5
    new_Service5_Text: {
      get() {
        return this.$store.state.services.services.servicesData[4].desc;
      },
      set(value) {
        this.update_Service5_Text(value);
      },
    },
    new_Service5_Title: {
      get() {
        return this.$store.state.services.services.servicesData[4].title;
      },
      set(value) {
        this.update_Service5_Title(value);
      },
    },
    new_Service5_Icon: {
      get() {
        return this.$store.state.services.services.servicesData[4].icon;
      },
      set(value) {
        this.update_Service5_Icon(value);
      },
    },
    //Service 6
    new_Service6_Text: {
      get() {
        return this.$store.state.services.services.servicesData[5].desc;
      },
      set(value) {
        this.update_Service6_Text(value);
      },
    },
    new_Service6_Title: {
      get() {
        return this.$store.state.services.services.servicesData[5].title;
      },
      set(value) {
        this.update_Service6_Title(value);
      },
    },
    new_Service6_Icon: {
      get() {
        return this.$store.state.services.services.servicesData[5].icon;
      },
      set(value) {
        this.update_Service6_Icon(value);
      },
    },
  },
  methods: {
    update_Service1_Text(value) {
      this.$store.commit("update_Service1_Text", value);
    },
    update_Service1_Title(value) {
      this.$store.commit("update_Service1_Title", value);
    },
    update_Service1_Icon(value) {
      this.$store.commit("update_Service1_Icon", value);
    },//==================//
    update_Service2_Text(value) {
      this.$store.commit("update_Service2_Text", value);
    },
    update_Service2_Title(value) {
      this.$store.commit("update_Service2_Title", value);
    },
    update_Service2_Icon(value) {
      this.$store.commit("update_Service2_Icon", value);
    },
    //==================//
    update_Service3_Text(value) {
      this.$store.commit("update_Service3_Text", value);
    },
    update_Service3_Title(value) {
      this.$store.commit("update_Service3_Title", value);
    },
    update_Service3_Icon(value) {
      this.$store.commit("update_Service3_Icon", value);
    },
    //==================//
    update_Service4_Text(value) {
      this.$store.commit("update_Service4_Text", value);
    },
    update_Service4_Title(value) {
      this.$store.commit("update_Service4_Title", value);
    },
    update_Service4_Icon(value) {
      this.$store.commit("update_Service4_Icon", value);
    },
    //==================//
    update_Service5_Text(value) {
      this.$store.commit("update_Service5_Text", value);
    },
    update_Service5_Title(value) {
      this.$store.commit("update_Service5_Title", value);
    },
    update_Service5_Icon(value) {
      this.$store.commit("update_Service5_Icon", value);
    },
    //==================//
    update_Service6_Text(value) {
      this.$store.commit("update_Service6_Text", value);
    },
    update_Service6_Title(value) {
      this.$store.commit("update_Service6_Title", value);
    },
    update_Service6_Icon(value) {
      this.$store.commit("update_Service6_Icon", value);
    },
  },
};
</script>
<style scoped>
.warning-text {
  color: red;
  font-size: 12px;
}


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

/* Accordion İçeriği */
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
