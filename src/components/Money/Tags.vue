<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag"
                :class="{selected : selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{ tag }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Tags extends Vue {
    @Prop() readonly dataSource: string[] | undefined
    selectedTags: string[] = []

    toggle(tag: string) {
        const index = this.selectedTags.indexOf(tag)
        if (index >= 0) {
            this.selectedTags.splice(index, 1)
        } else {
            this.selectedTags.push(tag)

        }
        this.$emit('update:value',this.selectedTags)


    }
    createTag(){
        const name = window.prompt('请输入标签名')
        if (name===''){
            window.alert('标签名不能为空')
        }
        else if(name!==''){
            this.$emit('update:tag',name)
        }
    }

}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  font-size: 14px;

  > .current {
    flex-wrap: wrap;
    display: flex;

    li {
      background: #16982b;
      height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin: 8px 12px;
      line-height: 24px;

      &.selected {
        background: darkgreen;
        color: wheat;
      }
    }

  }

  > .new {
    margin: 16px 8px;

    button {
      border: none;
      background: transparent;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 3px;

    }
  }
}

</style>