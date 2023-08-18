import { getDoc, doc } from "firebase/firestore";
import { db } from "@/js/firebase";

export default {
  state: {
    firstText: "",
    personalInfo: {
      name: "",
      myTitle: [],
    },
    buttonText: "",
  },

  mutations: {
    setIntroData(state, payload) {
      state.firstText = payload.firstText;
      state.personalInfo.name = payload.personalInfo.name;
      state.personalInfo.myTitle = payload.personalInfo.myTitle;
      state.buttonText = payload.buttonText;
    },
    updateFirstText(state, value) {
      localStorage.setItem("firstText", value);
      state.firstText = value; 
    },
    updateName(state, value) {
      localStorage.setItem("name", value);
      state.personalInfo.name = value; 
    },
    updateButtonText(state, value) {
      localStorage.setItem("buttonText", value);
      state.buttonText = value; 
    },
    updateMyTitle1(state, value) {
      localStorage.setItem("myTitle1", value);
      state.personalInfo.myTitle[0] = value; 
    },
    updateMyTitle2(state, value) {
      localStorage.setItem("myTitle2", value);
      state.personalInfo.myTitle[1] = value; 
    },
    updateMyTitle3(state, value) {
      localStorage.setItem("myTitle3", value);
      state.personalInfo.myTitle[2] = value; 
    },
  },
  actions: {
    async setIntroData({ commit }) {
      let data = {};
      const docRef = doc(db, "intro", "1");
      const querySnapshot = await getDoc(docRef);
      if (querySnapshot.exists()) {
        let introData = {
          firstText: querySnapshot.data().firstText,
          personalInfo: {
            name: querySnapshot.data().personalInfo.name,
            myTitle: querySnapshot.data().personalInfo.myTitle,
          },
          buttonText: querySnapshot.data().buttonText,
        };
        data.introData = introData;
      } else {

        console.log("No such document!");
      }
      commit("setIntroData", data.introData);
    },
  },
  getters: {
    _firstText: (state) => state.firstText,
    _name: (state) => state.personalInfo.name,
    _myTitle: (state) => state.personalInfo.myTitle,
    _buttonText: (state) => state.buttonText,
  },
};
