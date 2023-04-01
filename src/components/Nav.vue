<template>
    <nav>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name=labels></Icon>
            <span>标签</span>
        </router-link>
        |
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"></Icon>
            <span>理财</span>
        </router-link>
        |
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"></Icon>
            <span>统计</span>
        </router-link>

    </nav>
</template>



<script lang="ts">
import '../assets/icon.js'

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

nav{
    display: flex;
    box-shadow: 0 0 7px rgba(0,0,0,0.3);
    padding: 2px 0;
    > .item{
        display: flex;
        flex-direction: column;
        width: 33.33%;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
        color: inherit;
    }
    > .item.selected{
        color: #42b983;
    }
    span {
        font-weight: bold;
    }
}

</style>