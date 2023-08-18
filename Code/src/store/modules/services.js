import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/js/firebase";

export default {
  state: {
    services: {
      servicesData: [],
      mainDesc: "",
      mainTitle: "",
      mainSubTitle: "",
    },
  },
  mutations: {
    setServicesData(state, responseParameters) {
      state.services.servicesData = responseParameters;
    },
    setServicesTexts(state, payload) {
      state.services.mainDesc = payload.mainDesc;
      state.services.mainSubTitle = payload.mainSubTitle;
      state.services.mainTitle = payload.mainTitle;
    },
    update_Service1_Text(state, value) {
      localStorage.setItem("Service1_Text", value);
      state.services.servicesData[0].desc = value; 
    },
    update_Service1_Title(state, value) {
      localStorage.setItem("Service1_Title", value);
      state.services.servicesData[0].title = value; 
    },
    update_Service1_Icon(state, value) {
      localStorage.setItem("Service1_Icon", value);
      state.services.servicesData[0].icon = value; 
    },//=================
    update_Service2_Text(state, value) {
      localStorage.setItem("Service2_Text", value);
      state.services.servicesData[1].desc = value; 
    },
    update_Service2_Title(state, value) {
      localStorage.setItem("Service2_Title", value);
      state.services.servicesData[1].title = value; 
    },
    update_Service2_Icon(state, value) {
      localStorage.setItem("Service2_Icon", value);
      state.services.servicesData[1].icon = value; 
    },
    //=================
    update_Service3_Text(state, value) {
      localStorage.setItem("Service3_Text", value);
      state.services.servicesData[2].desc = value; 
    },
    update_Service3_Title(state, value) {
      localStorage.setItem("Service3_Title", value);
      state.services.servicesData[2].title = value; 
    },
    update_Service3_Icon(state, value) {
      localStorage.setItem("Service3_Icon", value);
      state.services.servicesData[2].icon = value; 
    },
    //=================
    update_Service4_Text(state, value) {
      localStorage.setItem("Service4_Text", value);
      state.services.servicesData[3].desc = value; 
    },
    update_Service4_Title(state, value) {
      localStorage.setItem("Service4_Title", value);
      state.services.servicesData[3].title = value; 
    },
    update_Service4_Icon(state, value) {
      localStorage.setItem("Service4_Icon", value);
      state.services.servicesData[3].icon = value; 
    },
    //=================
    update_Service5_Text(state, value) {
      localStorage.setItem("Service5_Text", value);
      state.services.servicesData[4].desc = value; 
    },
    update_Service5_Title(state, value) {
      localStorage.setItem("Service5_Title", value);
      state.services.servicesData[4].title = value; 
    },
    update_Service5_Icon(state, value) {
      localStorage.setItem("Service5_Icon", value);
      state.services.servicesData[4].icon = value; 
    },
    //=================
    update_Service6_Text(state, value) {
      localStorage.setItem("Service6_Text", value);
      state.services.servicesData[5].desc = value; 
    },
    update_Service6_Title(state, value) {
      localStorage.setItem("Service6_Title", value);
      state.services.servicesData[5].title = value; 
    },
    update_Service6_Icon(state, value) {
      localStorage.setItem("Service6_Icon", value);
      state.services.servicesData[5].icon = value; 
    },
  },
  actions: {
    async setServicesData(context) {
      const services = [];
      const querySnapshot = await getDocs(collection(db, "services"));
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          title: doc.data().title,
          desc: doc.data().desc,
          icon: doc.data().icon,
        };
        services.push(data);
      });
      context.commit("setServicesData", services);
    },
    async setServicesTexts({ commit }) {
      let data = {};
      const docRef = doc(db, "services", "main");
      const querySnapshot = await getDoc(docRef);
      if (querySnapshot.exists()) {
        let texts = {
          mainDesc: querySnapshot.data().mainDesc,
          mainSubTitle: querySnapshot.data().mainSubTitle,
          mainTitle: querySnapshot.data().mainTitle,
        };
        data.texts = texts;
      } else {

        console.log("No such document!");
      }
      commit("setServicesTexts", data.texts);
    },
  },
  getters: {
    getServices: (state) => state.services.servicesData,
    getMainDesc: (state) => state.services.mainDesc,
    getMainSubTitle: (state) => state.services.mainSubTitle,
    getMainTitle: (state) => state.services.mainTitle,
  },
};
