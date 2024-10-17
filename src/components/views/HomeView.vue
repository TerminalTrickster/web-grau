<!-- src/views/HomeView.vue -->
<template>
    <div class="home">
        <h1>Welcome to My Website</h1>
        <p>
            This is the homepage of our website. We are thrilled to have you here!
        </p>
        <router-link to="/about">Learn more about us</router-link>
    </div>
</template>

<script setup>
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 2rem;
}

h1 {
    font-size: 2.5rem;
    color: #333;
}

p {
    font-size: 1.25rem;
    color: #555;
}
</style>
