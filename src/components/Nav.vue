<template>
    <div class="nav">
        <router-link to="/money">
            <svg>
                <use xlink:href="#理财"></use>
            </svg>
            记账
        </router-link>
        |
        <router-link to="/labels">标签</router-link>
        |
        <router-link to="/statistics">统计</router-link>

    </div>
</template>

<script lang="ts">

import '@/assets/icons/分析.svg'
import '@/assets/icons/理财.svg'
import '@/assets/icons/标签.svg'

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