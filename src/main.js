import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Firebase from 'firebase'

Firebase.initializeApp({
  apiKey: "AIzaSyBDA63J7FOz9l0jWSolvFhM67_wr6SMNHw",
  authDomain: "spotifeel-fm.firebaseapp.com",
  databaseURL: "https://spotifeel-fm.firebaseio.com",
  projectId: "spotifeel-fm",
  storageBucket: "spotifeel-fm.appspot.com",
  messagingSenderId: "382199384279",
  appId: "1:382199384279:web:8417877999ce740799c892"
})

Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
