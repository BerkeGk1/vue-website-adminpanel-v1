import { createRouter, createWebHashHistory } from "vue-router";
import Demo from "../views/Home-Page.vue";
import Login from "../views/Login-Page.vue";
import ProjectsPage from "../components/Projects-Page.vue";
import adminPanel from "../views/admin-panel.vue";
import store from "@/store/store";

const routes = [
  {
    name: "AdminPanel",
    path: "/",
    component: adminPanel,
    meta: {
      noRequiredAuth: true,
    },
  },
  {
    name: "Demo",
    path: "/demo",
    component: Demo,
    meta: {
      noRequiredAuth: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      noRequiredAuth: true,
    },
    beforeEnter(to, from, next) {
      if (!store.getters.isAutenticated) {
        next();
      } else {
        next("/projects");
      }
    },
  },
  {
    name: "Projects",
    path: "/projects",
    component: ProjectsPage,
    beforeEnter(to, from, next) {
      if (store.getters.isAutenticated) {
        next();
      } else {
        next("/login");
      }
    },
    meta: {
      noRequiredAuth: false,
    },
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
