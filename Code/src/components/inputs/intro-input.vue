<template>
  <div class="row">
    <div class="coolinput">
      <div class="col-12">
        <div class="col-4">
          <label class="text">Rainbow Text:</label>
          <input
            type="text"
            v-model="newFirstText"
            class="input"
          />
        </div>
        <div class="col-4">
          <label class="text">Name:</label>
          <input type="text" v-model="newName"  class="input" />
        </div>
      </div>
      <div class="col-12">
        <div class="col-4">
          <label  class="text">Title 1:</label>
          <input type="text" v-model="newMyTitle1" class="input" />
        </div>
        <div class="col-4">
          <label  class="text">Title 2:</label>
          <input type="text" v-model="newMyTitle2" class="input" />
        </div>
        <div class="col-4">
          <label  class="text">Title 3:</label>
          <input type="text" v-model="newMyTitle3" class="input" />
        </div>
      </div>
      <div class="col-12">
        <div class="col-4">
          <label class="text">Button Text:</label>
          <input
            type="text"
            v-model="newButtonText"
            class="input"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.$store.dispatch("setIntroData");
  },
  computed: {
    newFirstText: {
      get() {
        return this.$store.state.intro.firstText;
      }, 
      set(value) {
        this.updateFirstText(value);
      },
    },
    newName: {
      get() {
        return this.$store.state.intro.personalInfo.name;
      }, 
      set(value) {
        this.updateName(value);
      },
    },
    newButtonText: {
      get() {
        return this.$store.state.intro.buttonText;
      }, 
      set(value) {
        this.updateButtonText(value);
      },
    },
    newMyTitle1: {
      get() {
        return this.$store.state.intro.personalInfo.myTitle[0];
      }, 
      set(value) {
        this.updateMyTitle1(value);
      },
    },
    newMyTitle2: {
      get() {
        return this.$store.state.intro.personalInfo.myTitle[1];
      }, 
      set(value) {
        this.updateMyTitle2(value);
      },
    },
    newMyTitle3: {
      get() {
        return this.$store.state.intro.personalInfo.myTitle[2];
      }, 
      set(value) {
        this.updateMyTitle3(value);
      },
    },
  },
  methods: {
    updateFirstText(value) {
      this.$store.commit("updateFirstText", value); 
    },
    updateName(value) {
      this.$store.commit("updateName", value); 
    },
    updateButtonText(value) {
      this.$store.commit("updateButtonText", value); 
    },
    updateMyTitle1(value) {
      this.$store.commit("updateMyTitle1", value); 
    },
    updateMyTitle2(value) {
      this.$store.commit("updateMyTitle2", value); 
    },
    updateMyTitle3(value) {
      this.$store.commit("updateMyTitle3", value); 
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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