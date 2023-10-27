<template>
  <div class="bg-blue-300 text-center h-full">
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
      <div class="flex flex-row bg-blue-400 w-full">
        <div class="h-[200px] w-[200px] bg-red-500">Foto</div>
        <div class="h-[full] w-[800px] bg-blue-500">{{ firebaseUser }}</div>
      </div>
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
