<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../api/backend';

const message = ref('')

function callApi() {
  api.hello().then((response) => {
    console.log("Response", response);
    message.value = response.data;
  })
}

onMounted(() => {
  console.log("Calling api")
  callApi();
})
</script>

<template>
  <main>
    <h1>XX</h1>
  </main>
</template>
