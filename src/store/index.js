import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import chat from './Chat';

Vue.use(Vuex)
Vue.use(Vuelidate)
const vuexLocal = new VuexPersist({
  key: 'vue-chat-sockets-mongo', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
});

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      chat,
    },
    plugins: [
      vuexLocal.plugin
    ],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
