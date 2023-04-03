<template>
    <label class="notes">
        <span class="name">备注</span>
        <input type="text" v-model="value"
               placeholder="在这里输入备注">
    </label>

</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";



@Component
export default class Notes extends Vue {
    value:string=''
    @Watch('value')
    onValueChanged(value:string){
        this.$emit('update:value',value)
    }


}
</script>

<style lang="scss" scoped>
.notes{
  background: #e5e5e5;
  padding: 16px;
  display: flex;
  align-items: center;
  > .name{
    padding-right: 10px ;
    font-size: 14px;
  }
  > input{
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    text-align: center;
  }
}

</style>