<template>
  <section
    class="pt-28 min-h-screen flex flex-col items-center text-center bg-neutral-800"
  >
    <h1 class="text-5xl font-bold text-zinc-200 mb-6">
      Welcome to <span class="text-violet-500">IamShitting</span>
    </h1>
    <p class="text-zinc-400 text-lg max-w-xl mb-8">Feel free to shit</p>

    <p class="text-zinc-400 text-lg max-w-xl mb-8">
      Server says: <span class="font-semibold">{{ pongMessage }}</span>
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getPing } from "../api";

const pongMessage = ref("Loading...");

onMounted(async () => {
  try {
    const data = await getPing();
    pongMessage.value = data.message || JSON.stringify(data);
  } catch (err) {
    pongMessage.value = "Error fetching data 😢";
  }
});
</script>
