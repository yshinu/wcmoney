<template>
    <layout class-prefix="layout">
        {{recordList}}
        <tags :data-source="tagList" @update:value="updateTags"></tags>



        <FormItem placeholder="在这里输入备注" field-name="备注" @update:value="updateNotes"/>


        <Types :value.sync="record.type" />


        <NumberPad @update:value="updateAmount" @submit="saveRecord"/>


    </layout>
</template>

<script lang="ts">


import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component, Vue, Watch} from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";
import FormItem from "@/components/Money/FormItem.vue";

@Component(
    {
        components: {FormItem, Tags, Types, NumberPad}
    }
)
export default class Money extends Vue {
    recordList = recordListModel.fetch()
    tagList = tagListModel.fetch().map(i=>i.name)


    record:RecordItem={
        tags:[],notes:'',type:'-',amount:0,
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
        const record2:RecordItem= JSON.parse(JSON.stringify(this.record))
        console.log(record2)

        let date = new Date();
        let options:Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Shanghai'
        };
        record2.createTime = date.toLocaleString('zh-CN', options)
        this.recordList.push(record2)
    }
    @Watch('recordList')
    onRecordListChanged(){
        recordListModel.save(this.recordList)
    }
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