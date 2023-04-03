<template>
    <layout class-prefix="layout">
            <tags />


            <Notes />


            <Types :xxx="1443"/>


            <NumberPad />


    </layout>
</template>

<script lang="ts">


import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";

export default {
    name: "money",
    components: {Tags, Notes, Types, NumberPad},

}
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column;
}

</style>