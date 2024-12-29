<template>
    <nav class="navbar">
        <router-link to="/" exact-active-class="active">Gästehaus</router-link>
        <router-link to="/about" exact-active-class="active">Über Uns</router-link>
        <router-link to="/rooms" exact-active-class="active">Zimmer & Preise</router-link>
        <router-link to="/links" exact-active-class="active">Tourismus</router-link>
        <router-link to="/agb" exact-active-class="active">AGB</router-link>
        <router-link to="/impressum" exact-active-class="active">Impressum</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
.navbar {
    font-size: 2rem;
    /* Scalable font size */
    width: 20vw;
    /* 20% of viewport width, makes it more flexible */
    max-width: 250px;
    /* Ensures it doesn't become too wide on larger screens */
    background-color: #ffffff;
    padding: 1.5rem;
    /* Padding in rem for flexibility */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* Space between items in rem */
    justify-content: center;
    /* Vertically center the items */
    align-items: center;
    max-height: 90vh;
    /* Prevent navbar from becoming too tall */
    overflow-y: auto;
    /* Enable vertical scrolling when content exceeds the height */
}

.navbar a {
    color: #333;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    /* Scalable padding */
    border-radius: 5px;
    transition: background-color 0.3s;
    font-size: 1.2rem;
    /* Ensure links are responsive */
}

.navbar a:hover {
    background-color: #ddd;
}

/* Active link styles */
.navbar .active {
    background-color: #008c05d4;
    color: white;
    font-weight: bold;
}

/* Mobile-first approach */
@media (max-width: 768px) {
    .navbar {
        width: 100%;
        /* Full width for smaller screens */
        padding: 1rem;
        /* Less padding on mobile */
    }

    .navbar a {
        font-size: 0.9rem;
        /* Slightly smaller font on mobile */
        padding: 0.8rem;
        /* Less padding on mobile */
    }

    .navbar .active {
        font-size: 1rem;
        /* Ensure the active link font size is readable on mobile */
    }
}
</style>
