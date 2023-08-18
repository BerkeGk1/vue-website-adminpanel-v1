<template>
    <div class="row">
      <div class="coolinput">
        <div class="col-12">
          <div class="accordion" id="experienceAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="currentExperience">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCurrentExperience" aria-expanded="true" aria-controls="collapseCurrentExperience">
                  Current Experience
                </button>
              </h2>
              <div id="collapseCurrentExperience" class="accordion-collapse collapse show" aria-labelledby="currentExperience" data-bs-parent="#experienceAccordion">
                <div class="accordion-body">
                  <div class="col-4">
            <label class="text">Period:</label>
            <input type="text" v-model="newFirstPeriod" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Company:</label>
            <input type="text" v-model="newFirstCompany" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Title:</label>
            <input type="text" v-model="newFirstTitle" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Responsibility:</label>
            <input
              type="text"
              v-model="newFirstFirstResponsibility"
              class="input"
            />
          </div>
  
          <div class="col-4">
            <label class="text">Resp.Desc.</label>
            <input
              type="text"
              v-model="newFirstFirstResponsibilityDesc"
              class="input"
            />
          </div>
          <div class="col-4">
            <label class="text">Responsibility:</label>
            <input
              type="text"
              v-model="newFirstSecondResponsibility"
              class="input"
            />
          </div>
  
          <div class="col-4">
            <label class="text">Resp.Desc.</label>
            <input
              type="text"
              v-model="newFirstSecondResponsibilityDesc"
              class="input"
            />
          </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="previousExperience">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePreviousExperience" aria-expanded="false" aria-controls="collapsePreviousExperience">
                  Previous Experience
                </button>
              </h2>
              <div id="collapsePreviousExperience" class="accordion-collapse collapse" aria-labelledby="previousExperience" data-bs-parent="#experienceAccordion">
                <div class="accordion-body">
                  <div class="col-4">
            <label class="text">Period:</label>
            <input type="text" v-model="newSecondPeriod" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Company:</label>
            <input type="text" v-model="newSecondCompany" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Title:</label>
            <input type="text" v-model="newSecondTitle" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Responsibility:</label>
            <input
              type="text"
              v-model="newSecondFirstResponsibility"
              class="input"
            />
          </div>
  
          <div class="col-4">
            <label class="text">Resp.Desc.</label>
            <input
              type="text"
              v-model="newSecondFirstResponsibilityDesc"
              class="input"
            />
          </div>
          <div class="col-4">
            <label class="text">Responsibility:</label>
            <input
              type="text"
              v-model="newSecondSecondResponsibility"
              class="input"
            />
          </div>
  
          <div class="col-4">
            <label class="text">Resp.Desc.</label>
            <input
              type="text"
              v-model="newSecondSecondResponsibilityDesc"
              class="input"
            />
          </div>
          <div class="col-4">
            <label class="text">Responsibility:</label>
            <input
              type="text"
              v-model="newSecondThreeResponsibility"
              class="input"
            />
          </div>
  
          <div class="col-4">
            <label class="text">Resp.Desc.</label>
            <input
              type="text"
              v-model="newSecondThreeResponsibilityDesc"
              class="input"
            />
          </div>
          <div class="col-4">
            <label class="text">Responsibility:</label>
            <input
              type="text"
              v-model="newSecondFourResponsibility"
              class="input"
            />
          </div>
  
          <div class="col-4">
            <label class="text">Resp.Desc.</label>
            <input
              type="text"
              v-model="newSecondFourResponsibilityDesc"
              class="input"
            />
          </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="anotherExperience">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAnotherExperience" aria-expanded="false" aria-controls="collapseAnotherExperience">
                  Previous Experience
                </button>
              </h2>
              <div id="collapseAnotherExperience" class="accordion-collapse collapse" aria-labelledby="anotherExperience" data-bs-parent="#experienceAccordion">
                <div class="accordion-body">
                  <div class="col-4">
            <label class="text">Period:</label>
            <input type="text" v-model="newThreePeriod" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Company:</label>
            <input type="text" v-model="newThreeCompany" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Title:</label>
            <input type="text" v-model="newThreeTitle" class="input" />
          </div>
          <div class="col-4">
            <label class="text">Resp.Desc.</label>
            <input
              type="text"
              v-model="newThreeFirstResponsibilityDesc"
              class="input"
            />
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
    beforeCreate() {
      this.$store.dispatch("setDataTimeLine");
    },
    computed: {
      //LAST EXPERİENCE
      newFirstPeriod: {
        get() {
          return this.$store.state.resume.experience.first.history;
        }, 
        set(value) {
          this.updateFirstPeriod(value);
        },
      },
      newFirstCompany: {
        get() {
          return this.$store.state.resume.experience.first.company;
        }, 
        set(value) {
          this.updateFirstCompany(value);
        },
      },
      newFirstTitle: {
        get() {
          return this.$store.state.resume.experience.first.title;
        }, 
        set(value) {
          this.updateFirstTitle(value);
        },
      },
      newFirstFirstResponsibility: {
        get() {
          return this.$store.state.resume.experience.first.text1Title;
        }, 
        set(value) {
          this.updateFirstFirstResponsibility(value);
        },
      },
      newFirstFirstResponsibilityDesc: {
        get() {
          return this.$store.state.resume.experience.first.text1;
        }, 
        set(value) {
          this.updateFirstFirstResponsibilityDesc(value);
        },
      },
      newFirstSecondResponsibility: {
        get() {
          return this.$store.state.resume.experience.first.text2Title;
        }, 
        set(value) {
          this.updateFirstSecondResponsibility(value);
        },
      },
      newFirstSecondResponsibilityDesc: {
        get() {
          return this.$store.state.resume.experience.first.text2;
        }, 
        set(value) {
          this.updateFirstSecondResponsibilityDesc(value);
        },
      },
      //SECOND PERİOD
      newSecondPeriod: {
        get() {
          return this.$store.state.resume.experience.second.history;
        }, 
        set(value) {
          this.updateSecondPeriod(value);
        },
      },
      newSecondCompany: {
        get() {
          return this.$store.state.resume.experience.second.company;
        }, 
        set(value) {
          this.updateSecondCompany(value);
        },
      },
      newSecondTitle: {
        get() {
          return this.$store.state.resume.experience.second.title;
        }, 
        set(value) {
          this.updateSecondTitle(value);
        },
      },
      newSecondFirstResponsibility: {
        get() {
          return this.$store.state.resume.experience.second.text1Title;
        }, 
        set(value) {
          this.updateSecondFirstResponsibility(value);
        },
      },
      newSecondFirstResponsibilityDesc: {
        get() {
          return this.$store.state.resume.experience.second.text1;
        }, 
        set(value) {
          this.updateSecondFirstResponsibilityDesc(value);
        },
      },
      newSecondSecondResponsibility: {
        get() {
          return this.$store.state.resume.experience.second.text2Title;
        }, 
        set(value) {
          this.updateSecondSecondResponsibility(value);
        },
      },
      newSecondSecondResponsibilityDesc: {
        get() {
          return this.$store.state.resume.experience.second.text2;
        }, 
        set(value) {
          this.updateSecondSecondResponsibilityDesc(value);
        },
      },
      newSecondThreeResponsibility: {
        get() {
          return this.$store.state.resume.experience.second.text3Title;
        }, 
        set(value) {
          this.updateSecondThreeResponsibility(value);
        },
      },
      newSecondThreeResponsibilityDesc: {
        get() {
          return this.$store.state.resume.experience.second.text3;
        }, 
        set(value) {
          this.updateSecondThreeResponsibilityDesc(value);
        },
      },
      newSecondFourResponsibility: {
        get() {
          return this.$store.state.resume.experience.second.text4Title;
        }, 
        set(value) {
          this.updateSecondFourResponsibility(value);
        },
      },
      newSecondFourResponsibilityDesc: {
        get() {
          return this.$store.state.resume.experience.second.text4;
        }, 
        set(value) {
          this.updateSecondFourResponsibilityDesc(value);
        },
      },
      //THREE EXPERİENCE
      newThreePeriod: {
        get() {
          return this.$store.state.resume.experience.three.history;
        }, 
        set(value) {
          this.updateThreePeriod(value);
        },
      },
      newThreeCompany: {
        get() {
          return this.$store.state.resume.experience.three.company;
        }, 
        set(value) {
          this.updateThreeCompany(value);
        },
      },
      newThreeTitle: {
        get() {
          return this.$store.state.resume.experience.three.title;
        }, 
        set(value) {
          this.updateThreeTitle(value);
        },
      },
      newThreeFirstResponsibility: {
        get() {
          return this.$store.state.resume.experience.three.text1Title;
        }, 
        set(value) {
          this.updateThreeFirstResponsibility(value);
        },
      },
      newThreeFirstResponsibilityDesc: {
        get() {
          return this.$store.state.resume.experience.three.text1;
        }, 
        set(value) {
          this.updateThreeFirstResponsibilityDesc(value);
        },
      },
    },
    methods: {
      updateFirstPeriod(value) {
        this.$store.commit("updateFirstPeriod", value); 
      },
      updateFirstCompany(value) {
        this.$store.commit("updateFirstCompany", value); 
      },
      updateFirstTitle(value) {
        this.$store.commit("updateFirstTitle", value); 
      },
      updateFirstFirstResponsibility(value) {
        this.$store.commit("updateFirstFirstResponsibility", value); 
      },
      updateFirstFirstResponsibilityDesc(value) {
        this.$store.commit("updateFirstFirstResponsibilityDesc", value); 
      },
      updateFirstSecondResponsibility(value) {
        this.$store.commit("updateFirstSecondResponsibility", value); 
      },
      updateFirstSecondResponsibilityDesc(value) {
        this.$store.commit("updateFirstSecondResponsibilityDesc", value); 
      },
      updateSecondPeriod(value) {
        this.$store.commit("updateSecondPeriod", value); 
      },
      updateSecondCompany(value) {
        this.$store.commit("updateSecondCompany", value); 
      },
      updateSecondTitle(value) {
        this.$store.commit("updateSecondTitle", value); 
      },
      updateSecondFirstResponsibility(value) {
        this.$store.commit("updateSecondFirstResponsibility", value); 
      },
      updateSecondFirstResponsibilityDesc(value) {
        this.$store.commit("updateSecondFirstResponsibilityDesc", value); 
      },
      updateSecondSecondResponsibility(value) {
        this.$store.commit("updateSecondSecondResponsibility", value); 
      },
      updateSecondSecondResponsibilityDesc(value) {
        this.$store.commit("updateSecondSecondResponsibilityDesc", value); 
      },
      updateSecondThreeResponsibility(value) {
        this.$store.commit("updateSecondThreeResponsibility", value); 
      },
      updateSecondThreeResponsibilityDesc(value) {
        this.$store.commit("updateSecondThreeResponsibilityDesc", value); 
      },
      updateSecondFourResponsibility(value) {
        this.$store.commit("updateSecondFourResponsibility", value); 
      },
      updateSecondFourResponsibilityDesc(value) {
        this.$store.commit("updateSecondFourResponsibilityDesc", value); 
      },
      updateThreePeriod(value) {
        this.$store.commit("updateThreePeriod", value); 
      },
      updateThreeCompany(value) {
        this.$store.commit("updateThreeCompany", value); 
      },
      updateThreeTitle(value) {
        this.$store.commit("updateThreeTitle", value); 
      },
      updateThreeFirstResponsibility(value) {
        this.$store.commit("updateThreeFirstResponsibility", value); 
      },
      updateThreeFirstResponsibilityDesc(value) {
        this.$store.commit("updateThreeFirstResponsibilityDesc", value); 
      },
  
    },
  };
  </script>
  <style scoped>.accordion-button {
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
  }</style>