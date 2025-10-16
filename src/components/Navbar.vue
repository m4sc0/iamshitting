<template>
  <header class="fixed top-0 left-0 w-full bg-neutral-700 backdrop-blur-md shadow-sm z-50">
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
      <h1 class="text-xl font-semibold text-zinc-200">IamShitting</h1>
      <div class="space-x-4">
        <RouterLink
          to="/"
          class="text-zinc-200 hover:text-blue-600 transition-colors"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-zinc-200 hover:text-blue-600 transition-colors"
        >
          About
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>
