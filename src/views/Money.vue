<template>
    <layout class-prefix="layout">
            <tags />


            <Notes />


            <Types />


            <NumberPad />


    </layout>
</template>

<script lang="ts">


import NumberPad from "@/components/NumberPad.vue";
import Types from "@/components/Types.vue";
import Notes from "@/components/Notes.vue";
import Tags from "@/components/Tags.vue";

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