<template>
  <div id="app">
    <PageHeader class="page-header" />
    <div class="main-container">
      <NavBar />
      <div class="content">
        <router-view />
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
import PageHeader from './components/PageHeader.vue';
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  /* Make sure it's 100% of the viewport width */
}

.page-header {
  width: 98.5%;
  /* PageHeader takes up 10% of the width */
  background-color: #AFD5AA;
  /* Optional: You can choose a background color */
  color: black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  /* Adjust font size as necessary */
}

.main-container {
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  /* Ensure horizontal scroll is allowed if necessary */
  overflow-y: auto;
  /* Allow vertical scroll too */
}

.content {
  border-radius: 10px;
  flex: 1;
  padding: 2rem;
  background-color: #F0F2EF;
  overflow-y: auto;
  /* Allow vertical scrolling */
}

nav {
  flex: 20%;
  width: 10%;
  /* Instead of using 20% or vw, use a fixed flex item sizing */
  max-width: 250px;
  /* Keep max-width to prevent too wide navbar */
  background-color: #f4f4f4;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1rem;
}

nav a:hover {
  background-color: #ddd;
}

/* Mobile-first approach */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }

  nav {
    width: 100%;
    /* Full width on small screens */
    position: static;
    /* Remove sticky behavior */
    padding: 1.5rem;
  }

  nav a {
    margin-bottom: 1rem;
  }

  .content {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  nav {
    font-size: 0.875rem;
  }
}
</style>
