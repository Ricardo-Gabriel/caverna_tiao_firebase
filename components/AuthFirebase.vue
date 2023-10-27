<template>
  <div>
    <h2 class="mb-5 title is-4 has-text-black">{{ title }}</h2>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="form.email"
          type="email"
          placeholder="exemplo@email.com"
          autocomplete="false"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <div class="field">
        <label class="label">Senha</label>
        <div class="control">
          <input
            class="input"
            v-model="form.password"
            type="password"
            placeholder="*********"
            autocomplete="false"
          />
        </div>
      </div>
    </div>
    <div v-if="message" class="has-text-sucess p-3">
      {{ message }}
    </div>
    <button class="button is-success" @click="$emit('submit')">Submit</button>
  </div>
</template>

<script setup>
const props = defineProps({
  form: Object,
  title: Strinng,
  message: String,
});
</script>
