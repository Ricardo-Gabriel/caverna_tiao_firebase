<template>
  <div>
    Secret Page
    <pre>{{ firebaseUser }}</pre>
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
definePageMeta({
  middleware: ["auth"],
});
</script>
