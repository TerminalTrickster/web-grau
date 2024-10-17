<!-- src/components/Sidebar.vue -->
<template>
    <aside class="sidebar">
        <h2 class="sidebar-title">Gästehaus Grau</h2>
        <nav class="sidebar-nav">
            <router-link to="/">Hauptseite</router-link>
            <router-link to="/about">Über uns</router-link>
            <router-link to="/rooms">Unsere Zimmer</router-link>
            <router-link to="/prices">Zimmer Preise</router-link>
            <router-link to="/attractions">Sehenswürdigkeiten</router-link>
            <router-link to="/contact">Kontakt</router-link>
            <router-link to="/location">Lage</router-link>
            <router-link to="/wildpark">Wildpark Hundshaupten</router-link>
            <router-link to="/impressum">Impressum</router-link>
            <router-link to="/terms">AGBs</router-link>
            <router-link to="/guestbook">Gästebuch</router-link>
            <router-link to="/map">Landkarte Satellitenbild</router-link>
        </nav>
    </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
    width: 200px;
    background-color: #fdfdc4;
    padding: 1rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
}

.sidebar-nav a {
    display: block;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: #333;
    background-color: #f9f7c8;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
}

.sidebar-nav a:hover {
    background-color: #e6d08d;
    color: #000;
}

.sidebar-nav a:active {
    background-color: #c9b56a;
}
</style>
