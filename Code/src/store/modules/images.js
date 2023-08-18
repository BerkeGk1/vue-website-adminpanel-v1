import { getDoc, doc } from "firebase/firestore";
import { db } from "@/js/firebase";

export default {
  state: {
    intro_background: "",
    logo: "",
    profile_pic: "",
    services_background: "",
  },

  mutations: {
    setPageImages(state, payload) {
      state.intro_background = payload.intro_background;
      state.logo = payload.logo;
      state.profile_pic = payload.profile_pic;
      state.services_background = payload.services_background;
    },
  },
  actions: {
    async setPageImages({ commit }) {
      let data = {};
      const docRef = doc(db, "pageImages", "70ckVRtYae3oCm4PQkul");
      const querySnapshot = await getDoc(docRef);
      if (querySnapshot.exists()) {
        let images = {
          intro_background: querySnapshot.data().intro_background,
          logo: querySnapshot.data().logo,
          profile_pic: querySnapshot.data().profile_pic,
          services_background: querySnapshot.data().services_background,
        };
        data.images = images;
      } else {

        console.log("No such document!");
      }
      commit("setPageImages", data.images);
    },
  },
  getters: {
    _intro_background: (state) => state.intro_background,
    _logo: (state) => state.logo,
    _profile_pic: (state) => state.profile_pic,
    _services_background: (state) => state.services_background,
  },
};
