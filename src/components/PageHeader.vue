<template>
    <header class="page-header">
        <div class="logo-container">
            <router-link to="/">
                <img src="../../res/GrauLogo.png" alt="Gästehaus Grau Logo" class="logo" />
            </router-link>
        </div>
        <div class="content-container">
            <h1 class="header-title">Gästehaus Grau</h1>
            <p class="header-subtitle">Willkommen in der Fränkischen Schweiz!</p>
        </div>
        <!-- Add the ImageCarousel component and pass images as prop -->
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #AFD5AA;
    border-bottom: 1px solid #e0e0e0;
    flex-wrap: wrap;
    border-radius: 10px;
    /* Add rounded corners */
}

.logo-container {
    flex: 0 0 auto;
    width: 13%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    max-width: 100%;
    height: auto;
}

.content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    text-align: left;
}

.header-title {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
}

.header-subtitle {
    margin: 0.5rem 0 0;
    font-size: 1.4rem;
    color: black;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .page-header {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .logo-container {
        width: 40%;
        /* Logo takes more width on mobile */
        margin-bottom: 1rem;
        /* Add space below logo */
    }

    .content-container {
        align-items: center;
        text-align: center;
    }

    .header-title {
        font-size: 1.6rem;
    }

    .header-subtitle {
        font-size: 1.2rem;
    }
}
</style>
