import { doc, getDoc } from "firebase/firestore";
import { db } from "@/js/firebase";

export default {
  state: {
    education: {
      title: "",
      degree: "",
      history: "",
      text: "",
      university: "",
    },
    experience: {
      first: {
        title: "",
        company: "",
        history: "",
        text1Title: "",
        text1: "",
        text2Title: "",
        text2: "",

      },
      second: {
        title: "",
        company: "",
        history: "",
        text1Title: "",
        text1: "",
        text2Title: "",
        text2: "",
        text3Title: "",
        text3: "",
        text4Title: "",
        text4: "",
      },
      three: {
        title: "",
        company: "",
        history: "",
        text1Title: "",
        text1: "",
      },
    },
  },
  mutations: {
    setDataTimeLine(state, payload) {
      state.education.title = payload.education.title;
      state.education.degree = payload.education.degree;
      state.education.history = payload.education.history;
      state.education.text = payload.education.text;
      state.education.university = payload.education.university;
      state.experience.first.title = payload.experience.first.title;
      state.experience.first.company = payload.experience.first.company;
      state.experience.first.history = payload.experience.first.history;
      state.experience.first.text1Title = payload.experience.first.text1Title;
      state.experience.first.text1 = payload.experience.first.text1;
      state.experience.first.text2Title = payload.experience.first.text2Title;
      state.experience.first.text2 = payload.experience.first.text2;
      state.experience.second.title = payload.experience.second.title;
      state.experience.second.company = payload.experience.second.company;
      state.experience.second.history = payload.experience.second.history;
      state.experience.second.text1Title = payload.experience.second.text1Title;
      state.experience.second.text1 = payload.experience.second.text1;
      state.experience.second.text2Title = payload.experience.second.text2Title;
      state.experience.second.text2 = payload.experience.second.text2;
      state.experience.second.text3Title = payload.experience.second.text3Title;
      state.experience.second.text3 = payload.experience.second.text3;
      state.experience.second.text4Title = payload.experience.second.text4Title;
      state.experience.second.text4 = payload.experience.second.text4;
      state.experience.three.title = payload.experience.three.title;
      state.experience.three.company = payload.experience.three.company;
      state.experience.three.history = payload.experience.three.history;
      state.experience.three.text1Title = payload.experience.three.text1Title;
      state.experience.three.text1 = payload.experience.three.text1;
    },
    updateFirstPeriod(state, value) {
      localStorage.setItem("FirstPeriod", value);
      state.experience.first.history = value; 
    },
    updateFirstCompany(state, value) {
      localStorage.setItem("FirstCompany", value);
      state.experience.first.company = value; 
    },
    updateFirstTitle(state, value) {
      localStorage.setItem("FirstTitle", value);
      state.experience.first.title = value; 
    },
    updateFirstFirstResponsibility(state, value) {
      localStorage.setItem("FirstFirstResponsibility", value);
      state.experience.first.text1Title = value; 
    },
    updateFirstFirstResponsibilityDesc(state, value) {
      localStorage.setItem("FirstFirstResponsibilityDesc", value);
      state.experience.first.text1 = value; 
    },
    updateFirstSecondResponsibility(state, value) {
      localStorage.setItem("FirstSecondResponsibility", value);
      state.experience.first.text2Title = value; 
    },
    updateFirstSecondResponsibilityDesc(state, value) {
      localStorage.setItem("FirstSecondResponsibilityDesc", value);
      state.experience.first.text2 = value; 
    },
    updateSecondPeriod(state, value) {
      localStorage.setItem("SecondPeriod", value);
      state.experience.second.history = value; 
    },
    updateSecondCompany(state, value) {
      localStorage.setItem("SecondCompany", value);
      state.experience.second.company = value; 
    },
    updateSecondTitle(state, value) {
      localStorage.setItem("SecondTitle", value);
      state.experience.second.title = value; 
    },
    updateSecondFirstResponsibility(state, value) {
      localStorage.setItem("SecondFirstResponsibility", value);
      state.experience.second.text1Title = value; 
    },
    updateSecondFirstResponsibilityDesc(state, value) {
      localStorage.setItem("SecondFirstResponsibilityDesc", value);
      state.experience.second.text1 = value; 
    },
    updateSecondSecondResponsibility(state, value) {
      localStorage.setItem("SecondSecondResponsibility", value);
      state.experience.second.text2Title = value; 
    },
    updateSecondSecondResponsibilityDesc(state, value) {
      localStorage.setItem("SecondSecondResponsibilityDesc", value);
      state.experience.second.text2 = value; 
    },
    updateSecondThreeResponsibility(state, value) {
      localStorage.setItem("SecondThreeResponsibility", value);
      state.experience.second.text3Title = value; 
    },
    updateSecondThreeResponsibilityDesc(state, value) {
      localStorage.setItem("SecondThreeResponsibilityDesc", value);
      state.experience.second.text3 = value; 
    },
    updateSecondFourResponsibility(state, value) {
      localStorage.setItem("SecondFourResponsibility", value);
      state.experience.second.text4Title = value; 
    },
    updateSecondFourResponsibilityDesc(state, value) {
      localStorage.setItem("SecondFourResponsibilityDesc", value);
      state.experience.second.text4 = value; 
    },
    updateThreePeriod(state, value) {
      localStorage.setItem("ThreePeriod", value);
      state.experience.three.history = value; 
    },
    updateThreeCompany(state, value) {
      localStorage.setItem("ThreeCompany", value);
      state.experience.three.company = value; 
    },
    updateThreeTitle(state, value) {
      localStorage.setItem("ThreeTitle", value);
      state.experience.three.title = value; 
    },
    updateThreeFirstResponsibility(state, value) {
      localStorage.setItem("ThreeFirstResponsibility", value);
      state.experience.three.text1Title = value; 
    },
    updateThreeFirstResponsibilityDesc(state, value) {
      localStorage.setItem("ThreeFirstResponsibilityDesc", value);
      state.experience.three.text1 = value; 
    },
  },
  actions: {
    async setDataTimeLine(context) {
      let data = {};
      const docRef = doc(db, "timeline", "11");
      const querySnapshot = await getDoc(docRef);
      if (querySnapshot.exists()) {
        let timelineData = {
          education: {
            title: querySnapshot.data().education.title,
            degree: querySnapshot.data().education.degree,
            history: querySnapshot.data().education.history,
            text: querySnapshot.data().education.text,
            university: querySnapshot.data().education.university,
          },
          experience: {
            first: {
              title: querySnapshot.data().experience.first.title,
              company: querySnapshot.data().experience.first.company,
              history: querySnapshot.data().experience.first.history,
              text1Title: querySnapshot.data().experience.first.text1Title,
              text1: querySnapshot.data().experience.first.text1,
              text2Title: querySnapshot.data().experience.first.text2Title,
              text2: querySnapshot.data().experience.first.text2,

            },
            second: {
              title: querySnapshot.data().experience.second.title,
              company: querySnapshot.data().experience.second.company,
              history: querySnapshot.data().experience.second.history,
              text1Title: querySnapshot.data().experience.second.text1Title,
              text1: querySnapshot.data().experience.second.text1,
              text2Title: querySnapshot.data().experience.second.text2Title,
              text2: querySnapshot.data().experience.second.text2,
              text3Title: querySnapshot.data().experience.second.text3Title,
              text3: querySnapshot.data().experience.second.text3,
              text4Title: querySnapshot.data().experience.second.text4Title,
              text4: querySnapshot.data().experience.second.text4,
            },
            three: {
              title: querySnapshot.data().experience.three.title,
              company: querySnapshot.data().experience.three.company,
              history: querySnapshot.data().experience.three.history,
              text1Title: querySnapshot.data().experience.three.text1Title,
              text1: querySnapshot.data().experience.three.text1,
            },
          },
        };
        data.timelineData = timelineData;
      } else {

        console.log("No such document!");
      }
      context.commit("setDataTimeLine", data.timelineData);
    },
  },
  getters: {
    _education: (state) => state.education,
    _experience: (state) => state.experience,
  },
};
