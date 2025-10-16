<template>
    <main style="display:grid;place-items:center;height:100vh">

        <nav>
            <RouterLink to="/home" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Go to Home</RouterLink> |
            <RouterLink to="/about" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Go to About</RouterLink>
        </nav>
        <RouterView />
    </main>
</template>

<script>
export default {
    name: 'App'
}
</script>