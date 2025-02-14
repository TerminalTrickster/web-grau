<template>
  <div id="vertical">
    <div id="top">
      <div id="horizontal">
        <div id="left">
          <NavBar></NavBar>
        </div>
        <div id="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div id="bottom">
      <PageFooter></PageFooter>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
}

#vertical {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#top {
  flex-grow: 1;
  overflow-y: auto;
}

#bottom {
  max-height: 20vh;
}

#horizontal {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#left {
  min-width: min-content;
  width: 20%;
  height: 100%;
  position: sticky;
  /* Make the left div sticky */
  top: 0;
  /* Stick it at the top */
}

#right {
  margin-left: 5%;
  width: 75%;
  /* Adjusted for better responsiveness */
  height: 100%;
  overflow-y: auto;
  /* Allow scrolling if content overflows */
}

@media (max-width: 768px) {
  #horizontal {
    flex-direction: column;
    /* Stack the columns on smaller screens */
  }

  #left {
    width: 100%;
    /* Full width for the navbar on smaller screens */
    position: static;
    /* Disable sticky positioning */
  }

  #right {
    width: 100%;
    /* Full width for the content area on smaller screens */
    margin-left: 0;
    /* Remove margin for smaller screens */
  }
}
</style>
