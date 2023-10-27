<template>
  <div>
    <p><NuxtLink to="/secret">Secret</NuxtLink></p>
    <button
      @click="signIn"
      v-if="!firebaseUser"
      class="button is-primary is-rounded"
    >
      Login
    </button>
    <button
      @click="signOut"
      v-if="firebaseUser"
      class="button is-danger is-rounded"
    >
      Logout
    </button>
    <div v-if="firebaseUser">
      <pre>
        {{ firebaseUser }}
        
      </pre>
    </div>
    <div v-if="!firebaseUser">
      <pre>Não tem ninguem em casa !!</pre>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const credentials = ref();
const firebaseUser = useFirebaseUser();
const signIn = async () => {
  const email = "teste2@email.com";
  const password = "123456";
  const credentials = await signInUser(email, password);
};

const signOut = async () => {
  const credentials = await singOutUser();
};

/**
     * Teste Criação de Usuario (ok )
      console.log("---APP---");
      const email = "teste3@email.com";
      const password = "123456";
      const credentials = await createUser(email, password);
      console.log("Credenciais do Usuario", credentials);
    */
</script>

<style></style>
