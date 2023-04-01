<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
@import "~@/assets/style.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
}

</style>
<script setup lang="ts">
</script>