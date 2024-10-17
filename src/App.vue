<!-- src/App.vue -->
<template>
  <div id="app">
    <SideBar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue';
</script>

<style>
#app {
  display: flex;
  background-color: #fdfbe2;
  height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 2rem;
  background-color: #fff;
}
</style>
