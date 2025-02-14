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
  display: flex;
  flex-direction: column;
}

#top {
  flex-grow: 1;
}

#horizontal {
  display: flex;
  flex-direction: row;
}

#left {
  min-width: min-content;
  width: 20%;
  height: fit-content;
  overflow-y: auto;
}

#right {
  margin-left: 5%;
  width: 80%;
  height: 100%;
  overflow-y: au;
}
</style>
