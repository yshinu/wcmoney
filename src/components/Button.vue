<template>
    <button class="button">
        <slot/>
    </button>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
@Component
export default class Button extends Vue {
}
</script>

<style lang="scss" scoped>
.button {
    background: #767676;
    color: white;
    border: none;
    border-radius: 3px;
    height: 40px;
    padding: 0 16px;
}
</style>