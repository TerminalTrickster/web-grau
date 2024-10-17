<!-- src/views/AboutView.vue -->
<template>
    <div class="about">
        <h1>About Us</h1>
        <p>
            Welcome to the about page! Here, we share a bit of our story, our values, and our mission.
        </p>
        <p>
            Our website is dedicated to providing a great experience. Feel free to browse around and explore!
        </p>
        <router-link to="/">Back to Home</router-link>
    </div>
</template>

<script setup>
</script>

<style scoped>
.about {
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
    margin: 1rem 0;
}
</style>
