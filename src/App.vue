<template>
  <div id="main">
    <div id="left">
      <NavBar></NavBar>
    </div>
    <div id="right">
      <router-view></router-view>
    </div>
  </div>
  <div id="footer">
    <PageFooter></PageFooter>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  /* Ensure full height of the page */
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#main {
  display: flex;
  flex-grow: 1;
  /* Take up the remaining space */
  width: 100%;
  overflow: hidden;
}

#left {
  width: 17vw;
  min-width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e0e0e0;
}

#right {
  width: 83vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* Enable vertical scrolling if content overflows */
  padding: 1%;
}

#footer {
  height: 17vh;
  width: 100vw;
  background-color: #f1f1f1;
  /* Optional: you can add more styling for the footer */
}
</style>
