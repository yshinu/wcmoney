<template>

    <svg class="iconpark-icon">
        <use :href="`#${name}`"></use>
    </svg>
</template>

<script lang="ts">

export default {
    name: "icon",
    props: ['name']

}
import '../assets/icon.js'
</script>

<style lang="scss" scoped>
.iconpark-icon {
  width: 30px;
  height: 30px;
  overflow: hidden;
  fill: #42b983;
  vertical-align: -0.15em;
}

</style>

