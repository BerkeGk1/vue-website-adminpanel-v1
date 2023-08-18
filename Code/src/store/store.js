import { createStore } from "vuex";
import intro from "./modules/intro";
import about_skills from "./modules/about-skills";
import resume from "./modules/resume";
import modal from "./modules/modal";
import services from "./modules/services";
import images from "./modules/images";
import inputs from "./modules/inputs.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../js/firebase.js";
import router from "@/router";

const store = createStore({
  state: {
    token: "",
    fbAPIKey: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    initAuth({ dispatch, commit }) {
      let token = localStorage.getItem("token");
      if (token) {
        let expirationDate = localStorage.getItem("expirationDate");
        let time = new Date().getTime();

        if (time >= +expirationDate) {
          dispatch("logout");
        } else {
          dispatch("setTimeoutTimer", 10000);
          // router.push("/projects");
        }

        commit("setToken", token);
      } else {
        return false;
      }
    },
    login({ commit, dispatch }, authData) {
      return signInWithEmailAndPassword(auth, authData.email, authData.password)
        .then((response) => {
          commit("setToken", response._tokenResponse.idToken);
          localStorage.setItem("token", response._tokenResponse.idToken);
          localStorage.setItem("expirationDate", new Date().getTime() + 10000);

          dispatch("setTimeoutTimer", 10000);
        })
        .catch((error) => {


          console.error("Hata oluştu:", error);
        });
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      router.push("/");
    },
    setTimeoutTimer({ dispatch }, expiresIn) {
      setTimeout(() => {
        dispatch("logout");
      }, expiresIn);
    },
  },
  getters: {
    isAutenticated(state) {
      return state.token !== "";
    },
  },
  modules: {
    intro,
    about_skills,
    resume,
    modal,
    services,
    images,
    inputs,
  },
});

export default store;
