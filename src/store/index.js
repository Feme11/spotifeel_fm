import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import createPersistedState from "vuex-persistedstate"
import Firebase from 'firebase'
Vue.use(Vuex);
Vue.use(axios)

export default new Vuex.Store({
  state: {
    favs: [],
  },
  mutations: {
    SET_FAVORITOS(state, favoritos){
      state.favs = favoritos
    }
  },
  actions: {
    set_favoritos({commit, state}, favorito) {
      let favoritos = state.favs
      console.log(favorito)
      favoritos.push(favorito)
      let email= Firebase.auth().currentUser.email;
      let favs = {
        cancionesfavoritas: favoritos
      }
      let payload= {
        email, favs
      }
      axios.post('https://us-central1-spotifeel-fm.cloudfunctions.net/usuarios/usuario', payload). then( data => {
        console.log(data);
        commit('SET_FAVORITOS', favoritos)
      })
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
