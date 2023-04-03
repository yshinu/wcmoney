<template>
    <div class="numberPad">
        <div class="output">{{ output }}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="deleteNumber">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="output='0'">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button class="ok">ok</button>
            <button class="zero" @click="inputContent">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>

</template>


<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
    output = '0'
    inputContent(event: MouseEvent) {
        const button = (event.target as HTMLButtonElement)
        const input = button.textContent!
        if (this.output === '0') {
            if ('0123456789'.indexOf(input) >= 0) {
                this.output = input
            } else {
                this.output += input
            }
            return;
        }
        if (this.output.indexOf('.') >= 0) {
            if (input === '.') {
                return;
            }
        }
        this.output += input

    }
    deleteNumber(){
        if (this.output.length === 1){
            this.output = '0'
        }
        else {this.output=this.output.slice(0, -1)}
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style";

.numberPad {
  .output {
    min-height: 72px;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.3);
  }

  .buttons {
    @extend %clearFix;

    > button {
      float: left;
      width: 25%;
      height: 8vh;
      background: transparent;
      border: none;
      box-shadow: 0 0 2px rgba(124, 252, 0, 0.2);
      $bg: rgba(152, 251, 152, 0.4);

      &.ok {
        height: 16vh;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      &:nth-child(1), &:nth-child(5), &:nth-child(9) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(6), &:nth-child(10) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(7), &:nth-child(11) {
        background: darken($bg, 8%);
      }

      &:nth-child(4), &:nth-child(8) {
        background: darken($bg, 12%);
      }

      &:nth-child(12) {
        background: darken($bg, 16%);
      }

      &:nth-child(13), &:nth-child(14) {
        background: darken($bg, 20%);
      }
    }
  }
}
</style>