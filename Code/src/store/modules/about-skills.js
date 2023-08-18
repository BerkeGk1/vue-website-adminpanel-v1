import { getDocs, collection,doc,getDoc } from "firebase/firestore";
import { db } from "@/js/firebase";

export default {
  state: {
    about: {
      pageTitle: "",
      titleDesc: "",
      myImageSrc: "",

      desc: ``,
      profile: {
        title: "",
        desc: "",
        birthdate: "",
        job: "",
        website: "",
        email: "",
      },
    },

    skills: [],
  },
  mutations: {
    setSkills(state, responseParameters) {
      state.skills = responseParameters;
    },
    setDataResume(state, payload) {
      state.about.pageTitle = payload.pageTitle;
      state.about.titleDesc = payload.titleDesc;
      state.about.myImageSrc = payload.myImageSrc;
      state.about.desc = payload.desc;
      state.about.profile.title = payload.profile.title;
      state.about.profile.desc = payload.profile.desc;
      state.about.profile.birthdate = payload.profile.birthdate;
      state.about.profile.job = payload.profile.job;
      state.about.profile.website = payload.profile.website;
      state.about.profile.email = payload.profile.email;
    },
    updatePageTitle(state, value) {
      localStorage.setItem("pageTitle", value);
      state.about.pageTitle = value; 
    },
    updateTitle(state, value) {
      localStorage.setItem("title", value);
      state.about.titleDesc = value; 
    },
    updateProfilePic(state, value) {
      localStorage.setItem("myImageSrc", value);
      state.about.myImageSrc = value; 
    },
    updateDesc(state, value) {
      localStorage.setItem("AboutDesc", value);
      state.about.desc = value; 
    },
    updateProfileDesc(state, value) {
      localStorage.setItem("ProfileDesc", value);
      state.about.profile.desc = value; 
    },
    updateBirthDate(state, value) {
      localStorage.setItem("BirthDate", value);
      state.about.profile.birthdate = value; 
    },
    updateJob(state, value) {
      localStorage.setItem("Job", value);
      state.about.profile.job = value; 
    },
    updateWebsite(state, value) {
      localStorage.setItem("Website", value);
      state.about.profile.website = value; 
    },
    updateEmail(state, value) {
      localStorage.setItem("Email", value);
      state.about.profile.email = value; 
    },
    addSkill(state) {
      const id = state.skills.length < 9 ? state.skills.length + 1 : '9' + (state.skills.length - 8);
      state.skills.push({ id, title: '', percent: '' });
    },

    setSkillsFromLocalStorage(state, skills) {
      state.skills = skills;
    },
  
    updateSkill(state, { index, skill }) {
      state.skills[index] = skill;
      localStorage.setItem("skills", JSON.stringify(state.skills));
    },

    deleteSkill(state, index) {
      state.skills.splice(index, 1);
      localStorage.setItem("skills", JSON.stringify(state.skills));
    },

  },
  actions: {
    async setSkills(context) {
      const skills = [];
      const querySnapshot = await getDocs(
        collection(db, "ResumePage", "skills", "skills")
      );
      querySnapshot.forEach((doc) => {
        const skillData = {
          id: doc.id,
          title: doc.data().title,
          percent: doc.data().percent,
        };
        skills.push(skillData);
      });
      context.commit("setSkills", skills);
    },
    async setDataResume(context) {
      let data = {};
      const docRef = doc(db, "ResumePage", "data");
      const querySnapshot = await getDoc(docRef);
      if (querySnapshot.exists()) {
        let resumeData = {
          pageTitle: querySnapshot.data().pageTitle,
          titleDesc: querySnapshot.data().titleDesc,
          myImageSrc: querySnapshot.data().myImageSrc,
          desc: querySnapshot.data().desc,
          profile: {
            title: querySnapshot.data().profile.title,
            desc: querySnapshot.data().profile.desc,
            email: querySnapshot.data().profile.email,
            job: querySnapshot.data().profile.job,
            birthdate: querySnapshot.data().profile.birthdate,
            website: querySnapshot.data().profile.website,
          },
        };
        data.resumeData = resumeData;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      context.commit("setDataResume", data.resumeData);
    },},
  //   async setDataResume(context) {
  //     // resume-me.vue sayfa içeriği
  //     const data = {
  //       pageTitle: "About",
  //       titleDesc: "Let me introduce myself.",
  //       myImageSrc: "images/profile-pic.webp",

  //       desc: `I graduated from Süleyman Demirel University, Department of
  //   Mechatronics Engineering in June 2021. During my education, I did
  //   internships at various institutions to adapt to the professional
  //   life and reinforce and apply theoretical knowledge. I took on the
  //   role of founding the SDU - Mechatronics Community. I served as an
  //   active member in the SDU - TEMA community for 3 years. In my
  //   professional career, I work as an Analysis Engineer. I strive to
  //   develop myself in the software industry. I am a strong team player
  //   who enjoys being in social environments, has high communication
  //   skills, and can quickly learn and apply new technologies and trends.`,
  //       profile: {
  //         title: "Profile",
  //         desc: "",
  //         birthdate: "July 17,1996",
  //         job: "Analysis Engineer,Developer",
  //         website: "www.berkegokner.com",
  //         email: "me@berkegokner.com",
  //       },
  //     };
  //     context.commit("setDataResume", data);
  //   },
  // },
  getters: {
    getSkills: (state) => state.skills,
    _resume: (state) => state.about,
  },
}
