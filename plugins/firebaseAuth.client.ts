import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyCKgPKz85pRCvVxa-iWaQq1pf8ME_kG3kk",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  console.log(app);
});
