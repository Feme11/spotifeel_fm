import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login"
import Firebase from "firebase"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: to => {
      console.log(to)
      return {name: 'Login'}
      }
  },
  {
    path: '*',
    redirect: to => {
      console.log(to)
      return {name: 'Login'}
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/buscarfavoritos",
    name: "PanelBusqueda",
    // route level code-splitting
    // this generates a separate chunk (PanelBusqueda.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "PanelBusqueda" */ "../views/PanelBusqueda.vue"),
    meta: {
      login: true
    }
  },
    {
      path: "/feel",
      name: "Feel",
      // route level code-splitting
      // this generates a separate chunk (Feel.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Feel" */ "../views/Feel.vue"),
      meta: {
        login: true
      }
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
  next('login');
  } else if (user && !authRequired) {
  next('buscarfavoritos');
  } else {
  next();
  }
  });

export default router;
