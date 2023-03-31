<template>
    <div class="nav-wrapper">
        <div class="content">
            money.vue

        </div>
        <Nav/>

    </div>

</template>

<script lang="ts">


export default {
    name: "money",

}
</script>

<style lang="scss" scoped>
.nav-wrapper{
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    overflow: auto;
    border: 1px solid yellow;
    flex-grow: 1;
}

</style>