import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "@/js/firebase";

export default {
  state: {
    modal: {
      titles: "",
      titleDesc: "",
      category: "",
      imgSrc: "",
    },
    subTexts: [],
    titles: [],
    images: [],
  },
  mutations: {
    setImages(state, responseParameters) {
      state.images = responseParameters;
    },
    setSubTexts(state, responseParameters) {
      state.subTexts = responseParameters;
    },
    setTitles(state, responseParameters) {
      state.titles = responseParameters;
    },
    setModalData(state, data) {
      state.modal.title = data.title;
      state.modal.titleDesc = data.titleDesc;
      state.modal.category = data.category;
      state.modal.imgSrc = data.imgSrc;
    },
    update_Sector1_MainText(state, value) {
      localStorage.setItem("Sector1_MainText", value);
      state.subTexts[0].subText = value; 
    },
    update_Sector1_MainTitle(state, value) {
      localStorage.setItem("Sector1_MainTitle", value);
      state.titles[0].title = value; 
    },
    update_Sector1_Img(state, value) {
      localStorage.setItem("Sector1_Img", value);
      state.images[0].images = value; 
    },//=================
    update_Sector2_MainText(state, value) {
      localStorage.setItem("Sector2_MainText", value);
      state.subTexts[1].subText = value; 
    },
    update_Sector2_MainTitle(state, value) {
      localStorage.setItem("Sector2_MainTitle", value);
      state.titles[1].title = value; 
    },
    update_Sector2_Img(state, value) {
      localStorage.setItem("Sector2_Img", value);
      state.images[1].images = value; 
    },
    //=================
    update_Sector3_MainText(state, value) {
      localStorage.setItem("Sector3_MainText", value);
      state.subTexts[2].subText = value; 
    },
    update_Sector3_MainTitle(state, value) {
      localStorage.setItem("Sector3_MainTitle", value);
      state.titles[2].title = value; 
    },
    update_Sector3_Img(state, value) {
      localStorage.setItem("Sector3_Img", value);
      state.images[2].images = value; 
    },
    //=================
    update_Sector4_MainText(state, value) {
      localStorage.setItem("Sector4_MainText", value);
      state.subTexts[3].subText = value; 
    },
    update_Sector4_MainTitle(state, value) {
      localStorage.setItem("Sector4_MainTitle", value);
      state.titles[3].title = value; 
    },
    update_Sector4_Img(state, value) {
      localStorage.setItem("Sector4_Img", value);
      state.images[3].images = value; 
    },
    //=================
    update_Sector5_MainText(state, value) {
      localStorage.setItem("Sector5_MainText", value);
      state.subTexts[4].subText = value; 
    },
    update_Sector5_MainTitle(state, value) {
      localStorage.setItem("Sector5_MainTitle", value);
      state.titles[4].title = value; 
    },
    update_Sector5_Img(state, value) {
      localStorage.setItem("Sector5_Img", value);
      state.images[4].images = value; 
    },
    //=================
    update_Sector6_MainText(state, value) {
      localStorage.setItem("Sector6_MainText", value);
      state.subTexts[5].subText = value; 
    },
    update_Sector6_MainTitle(state, value) {
      localStorage.setItem("Sector6_MainTitle", value);
      state.titles[5].title = value; 
    },
    update_Sector6_Img(state, value) {
      localStorage.setItem("Sector6_Img", value);
      state.images[5].images = value; 
    },
  },
  actions: {
    async setImages(context) {
      const images = [];
      const querySnapshot = await getDocs(collection(db, "modal"));
      querySnapshot.forEach((doc) => {
        const imagesData = {
          images: doc.data().imgSrcLarge,
        };
        images.push(imagesData);
      });
      context.commit("setImages", images);
    },
    async setSubTexts(context) {
      const subTexts = [];
      const querySnapshot = await getDocs(collection(db, "modal"));
      querySnapshot.forEach((doc) => {
        const subTextData = {
          subText: doc.data().subText,
        };
        subTexts.push(subTextData);
      });
      context.commit("setSubTexts", subTexts);
    },
    async setTitles(context) {
      const subTitle = [];
      const querySnapshot = await getDocs(collection(db, "modal"));
      querySnapshot.forEach((doc) => {
        const titleData = {
          title: doc.data().title,
        };
        subTitle.push(titleData);
      });
      context.commit("setTitles", subTitle);
    },
    async setModalData({ commit }, itemId) {
      let data = {};
      const docRef = doc(db, "modal", "" + itemId);
      const querySnapshot = await getDoc(docRef);
      if (querySnapshot.exists()) {
        let modalData = {
          title: querySnapshot.data().title,
          titleDesc: querySnapshot.data().titleDesc,
          category: querySnapshot.data().category,
          imgSrc: querySnapshot.data().imgSrc,
        };
        data.modalData = modalData;
      } else {

        console.log("No such document!");
      }
      commit("setModalData", data.modalData);
    },
  },
  getters: {
    _modal: (state) => state.modal,
    _subTexts: (state) => state.subTexts,
    _titles: (state) => state.titles,
    _images: (state) => state.images,
  },
};
