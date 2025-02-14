<template>
    <div class="navbar">
        <!-- Logo Section -->
        <div class="logo-container">
            <router-link to="/">
                <img src="../../res/GrauLogo.png" alt="Gästehaus Grau Logo" class="logo" />
            </router-link>
        </div>
        <!-- Navigation Links -->
        <div class="nav-links">
            <router-link to="/" active-class="active">Gästehaus</router-link>
            <router-link to="/about" active-class="active">Über Uns</router-link>
            <router-link to="/rooms" active-class="active">Zimmer & Preise</router-link>
            <router-link to="/tourismus" active-class="active">Tourismus</router-link>
            <router-link to="/agb" active-class="active">AGB</router-link>
            <router-link to="/impressum" active-class="active">Impressum</router-link>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
};
</script>

<style scoped>
/* Navbar Container */
.navbar {
    background-color: #ffffff;
    height: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
}

/* Logo Section */
.logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
}

.logo {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: contain;
}

/* Navigation Links */
.nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    text-align: center;
}

/* Link Styling */
.navbar a {
    color: #333;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    border-radius: 5px;
    transition: background-color 0.3s;
    font-size: 1.2rem;
}

.navbar a:hover {
    background-color: #ddd;
}

/* Active Link Styles */
.navbar .active {
    background-color: #008c05d4;
    color: white;
    font-weight: bold;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .navbar {
        width: 100%;
        padding: 1rem;
    }

    .logo-container {
        margin-bottom: 1rem;
    }

    .navbar a {
        font-size: 0.9rem;
        padding: 0.8rem;
    }

    .navbar .active {
        font-size: 1rem;
    }
}
</style>
