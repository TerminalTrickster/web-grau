<template>
    <div class="impressum-container">
        <h1 class="impressum-title">Impressum</h1>
        <div class="impressum-content">
            <p><strong>Gästehaus Grau</strong></p>
            <p>Markgrafenstr. 107</p>
            <p>91349 Egloffstein</p>
            <p><strong>Email:</strong> <a :href="'mailto:gaestehaus-grau@gmx.de'">gaestehaus-grau@gmx.de</a></p>
            <p><strong>Tel.:</strong> <a :href="'tel:+4909197439'">0 91 97 / 439</a></p>
        </div>
    </div>
</template>

<script setup lang="ts">
// No special script needed for this page, just displaying static content.
</script>

<style scoped>
.impressum-container {
    padding: 2rem;
    background-color: #f9f9f9;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 8px;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.impressum-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.impressum-content {
    font-size: 1.2rem;
    line-height: 1.5;
}

.impressum-content a {
    color: #007bff;
    text-decoration: none;
}

.impressum-content a:hover {
    text-decoration: underline;
}
</style>
