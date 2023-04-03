<template>
    <layout class-prefix="layout">
        {{record}}
        <tags :data-source="tags"
              @update:tag="addTag"
              @update:value="updateTags"/>


        <Notes @update:value="updateNotes"/>


        <Types :value.sync="record.type" />


        <NumberPad @update:value="updateAmount" @submit="saveRecord"/>


    </layout>
</template>

<script lang="ts">


import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component, Vue, Watch} from "vue-property-decorator";
type Record={
    tags:string[]
    notes:string
    type:string
    amount:number

}
@Component(
    {
        components: {Tags, Notes, Types, NumberPad}
    }
)
export default class Money extends Vue {
    recordList:Record[]=[]
    record:Record={
        tags:[],notes:'',type:'-',amount:0
}
    addTag(e:string){
        this.tags.push(e)
    }
    updateTags(value: string[]) {
        this.record.tags=value
    }

    updateNotes(value: string) {
        this.record.notes = value
    }
    updateAmount(value:string){
        this.record.amount = parseFloat(value)
    }
    saveRecord(){
        const record=JSON.parse(JSON.stringify(this.record))
        this.recordList.push(record)
    }
    @Watch('recordList')
    onRecordListChanged(){
        window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }





    tags: string[] = ['衣', '食', '住', '行', '哈哈']

}
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}

</style>