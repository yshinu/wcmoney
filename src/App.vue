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
body{
    background: rgba(220,220,220,0.2);
}
ul,ol{
    list-style: none;
}
button,input{
    font: inherit;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
}
:focus{
    outline: none;
}

</style>
<script setup lang="ts">
</script>