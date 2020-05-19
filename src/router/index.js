import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Documentation from "../views/Documentation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/documentation",
    name: "Documentation",
    component: Documentation
  }
];

const router = new VueRouter({
  routes
});

export default router;
