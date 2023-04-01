<template>
    <svg class="icon">
        <use :xlink:href="`#${name}`"></use>
    </svg>
</template>

<script lang="ts">
import '@/assets/icons/分析.svg'
import '@/assets/icons/理财.svg'
import '@/assets/icons/标签.svg'
export default {
    name: "icon",
    props: ['name']

}
</script>

<style lang="scss" scoped>
.icon {
    width: 30px;
    height: 30px;
    overflow: hidden;
    vertical-align: -0.15em;
}

</style>

