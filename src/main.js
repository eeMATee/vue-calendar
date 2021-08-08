import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCEWId0iqHxLVyBGdGB5VDcNE9mJsZZtzM",

  authDomain: "calendar-b6e32.firebaseapp.com",

  projectId: "calendar-b6e32",

  storageBucket: "calendar-b6e32.appspot.com",

  messagingSenderId: "69081576805",

  appId: "1:69081576805:web:2e693565c9d0170500dd8c"

})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
