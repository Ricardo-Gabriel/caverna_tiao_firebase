import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY ,
        authDomain: "caverna-1cd65.firebaseapp.com",
        projectId: "caverna-1cd65",
        storageBucket: "caverna-1cd65.appspot.com",
        messagingSenderId: "906158316071",
        appId: "1:906158316071:web:e57a760ae198342ad10c02"
      };
    // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      console.log(app)
  })
  