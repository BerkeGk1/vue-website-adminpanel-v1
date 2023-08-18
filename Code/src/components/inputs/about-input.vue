<template>
  <div class="row">
    <div class="coolinput">
      <div class="col-12">
        <div class="col-4">
          <label class="text">Page Title:</label>
          <input
            type="text"
            v-model="newPageTitle"
            class="input"
          />
        </div>
        <div class="col-4">
          <label class="text">Title:</label>
          <input type="text" v-model="newTitle"  class="input" />
        </div>
        <div class="col-4">
          <label  class="text">Profile Picture:</label>
          <input type="text" v-model="newProfilePic"  class="input" />
        </div>
        <div class="col-4">
          <label class="text">Desc:</label>
          <input type="text" v-model="newDesc" class="input" />
        </div>
      </div>
      <div class="col-12">
        <div class="col-4">
          <label  class="text">Profile Desc:</label>
          <input type="text" v-model="newProfileDesc"  class="input" />
        </div>

        <div class="col-4">
          <label  class="text">Birth Date:</label>
          <input type="text" v-model="newBirthDate"  class="input" />
        </div>

        <div class="col-4">
          <label  class="text">Job:</label>
          <input type="text" v-model="newJob"  class="input" />
        </div>
        <div class="col-4">
          <label  class="text">Website:</label>
          <input type="text" v-model="newWebsite" class="input" />
        </div>
        <div class="col-4">
          <label  class="text">E-mail:</label>
          <input type="text" v-model="newEmail"  class="input" />
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.$store.dispatch("setDataResume");
  },
  computed: {
    newPageTitle: {
      get() {
        return this.$store.state.about_skills.about.pageTitle;
      }, 
      set(value) {
        this.updatePageTitle(value);
      },
    },
    newTitle: {
      get() {
        return this.$store.state.about_skills.about.titleDesc;
      }, 
      set(value) {
        this.updateTitle(value);
      },
    },
    newProfilePic: {
      get() {
        return "URL"
      }, 
      set(value) {
        this.updateProfilePic(value);
      },
    },
    newDesc: {
      get() {
        return this.$store.state.about_skills.about.desc;
      }, 
      set(value) {
        this.updateDesc(value);
      },
    },
    newProfileDesc: {
      get() {
        return this.$store.state.about_skills.about.profile.desc;
      }, 
      set(value) {
        this.updateProfileDesc(value);
      },
    },
    newBirthDate: {
      get() {
        return this.$store.state.about_skills.about.profile.birthdate;
      }, 
      set(value) {
        this.updateBirthDate(value);
      },
    },
    
    newJob: {
      get() {
        return this.$store.state.about_skills.about.profile.job;
      }, 
      set(value) {
        this.updateJob(value);
      },
    },
    newWebsite: {
      get() {
        return this.$store.state.about_skills.about.profile.website;
      }, 
      set(value) {
        this.updateWebsite(value);
      },
    },
    newEmail: {
      get() {
        return this.$store.state.about_skills.about.profile.email;
      }, 
      set(value) {
        this.updateEmail(value);
      },
    },
  },
  methods: {
    updatePageTitle(value) {
      this.$store.commit("updatePageTitle", value); 
    },
    updateTitle(value) {
      this.$store.commit("updateTitle", value); 
    },
    updateProfilePic(value) {
      this.$store.commit("updateProfilePic", value); 
    },
    updateDesc(value) {
      this.$store.commit("updateDesc", value); 
    },
    updateProfileDesc(value) {
      this.$store.commit("updateProfileDesc", value); 
    },
    updateBirthDate(value) {
      this.$store.commit("updateBirthDate", value); 
    },
    updateJob(value) {
      this.$store.commit("updateJob", value); 
    },
    updateWebsite(value) {
      this.$store.commit("updateWebsite", value); 
    },
    updateEmail(value) {
      this.$store.commit("updateEmail", value); 
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