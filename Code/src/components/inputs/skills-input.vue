<template>
  <div class="coolinput"><div class="col-12">
    <table class="skills-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Percent</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(skill, index) in skills" :key="skill.id">
          <td>
            <input type="text" v-model="skill.title" @input="updateSkill(index, skill)" />
          </td>
          <td>
            <input type="number" v-model="skill.percent" @input="updateSkill(index, skill)" min="0" max="100" step="5" onkeydown="return false;"/>
          </td>
          <td>
            <button @click="deleteSkill(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addSkill">Add Skill</button>
  </div></div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("setSkills");
  },
  computed: {
    skills() {
      return this.$store.state.about_skills.skills;
    },
  },
  methods: {
    addSkill() {
      this.$store.commit('addSkill');
    },
    updateSkill(index, skill) {
      this.$store.commit('updateSkill', { index, skill });
    },
    deleteSkill(index) {
    this.$store.commit("deleteSkill", index);
  },
  
  },
};
</script>

<style scoped>
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
  padding-top: 0px;
}

.skills-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  text-align: left;
  margin-top: 40px;
}

.skills-table th,
.skills-table td {
  padding: 5px; 
  border: 2px solid #ccc;
  text-align: center;
}

.skills-table th {
  background-color: #1abc9c;
  color: #555;
  font-weight: bold;
}

.skills-table td input {
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  font-size: 16px;
  height: 4rem;
  background-size: 200% 100%;
  transition: all 0.5s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  animation: gradient 3s linear infinite;
  margin-bottom:0px
}

.skills-table td input:focus {
  outline: none;
  box-shadow: 0 0 15px #1abc9c; 
  background-position: 200% 100%;
}

.skills-table button {
  padding: 4px 8px; 
  background-color: #f9f9f9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px; 
  text-align: center; 
  line-height: 1.5; 
  margin: 0;
  display: inline-block
}

.skills-table button:hover {
  background-color: #1abc9c;
}

button {
  display: block;
  padding: 5px 10px; 
  background-color: #f9f9f9;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  text-align: center; 
  line-height: 1.5;
  margin-top: 10px;
  height: 25px;
}

button:hover {
  background-color: #1abc9c;
}
</style>