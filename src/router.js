import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about/:id",
      name: "about",
      component: About
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
