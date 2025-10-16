<template>
  <section
    class="pt-28 min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-50 to-white"
  >
    <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
    <h2 class="text-2xl font-semibold text-gray-800 mb-3">
      Page Not Found
    </h2>
    <p class="text-gray-600 mb-8">
      The page you’re looking for doesn’t exist or has been moved.
    </p>

    <RouterLink
      to="/"
      class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
    >
      Go Back Home
    </RouterLink>
  </section>
</template>

<script setup>
</script>
