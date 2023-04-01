<template>
    <div class="nav">
        <router-link to="/money">
            <Icon name="理财"></Icon>
            记账
        </router-link>
        |
        <router-link to="/labels">
            <Icon name="标签"></Icon>
            标签
        </router-link>
        |
        <router-link to="/statistics">
            <Icon name="分析"></Icon>
            统计
        </router-link>

    </div>
</template>

<script lang="ts">
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try {
//     importAll(require.context(path : "../assets/icons", deep:true, filter:/\.svg$/))
// }catch (e) {
//     console.log(e);
// }


export default {
    name: "nav"
}
</script>

<style lang="scss" scoped>

.nav{
    border:1px solid red;
}

</style>