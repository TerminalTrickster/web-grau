<template>
    <div id="view">
        <p><strong>Gästehaus Grau</strong></p>
        <p>Markgrafenstr. 107</p>
        <p>91349 Egloffstein</p>
        <p><strong>Email:</strong> <a :href="'mailto:gaestehaus-grau@gmx.de'">gaestehaus-grau@gmx.de</a></p>
        <p><strong>Tel.:</strong> <a :href="'tel:+4909197439'">0 91 97 / 439</a></p>
    </div>
</template>

<script setup lang="ts">
</script>
<style>
.agb {
    padding: 5px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
}

h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
}

h3 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 1.5rem;
}

p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    color: #555;
}

a {
    color: #0066cc;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>