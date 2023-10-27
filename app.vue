<template>
  <div>
    <button @click="signIn" class="button is-primary is-rounded">Login</button>
    <button @click="signOut" class="button is-danger is-rounded">Logout</button>
    <pre>
      {{ credentials }}
      teste
    </pre>
  </div>
</template>

<script setup>
const credentials = ref();

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

<script></script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
