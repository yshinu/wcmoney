<template>
    <ul class="types">
        <li :class="value === '-'&& 'selected'"
        @click="selectType('-')">支出</li>
        <li :class="value === '+'&& 'selected'"
        @click="selectType('+')">收入</li>
    </ul>

</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component


export default class Types extends Vue{
    @Prop() readonly value!:string

    selectType(type: string){
            if (type !=='-'&&type !== '+'){
                throw  new Error('type是个未知类型')
            }
            this.$emit("update:value",type)
    }


}
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  background: rgba(152,251,152,0.4);
  text-align: center;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  > li{
    width: 50%;
    height: 64px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    &.selected::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #333;
    }
  }
}

</style>