<template>
    <layout>
        <div class="tags">
            <router-link v-for="tag in tagsAll" :key="tag.id"
            :to="`/labels/edit/${tag.id}`" class="tag" >
                <span>{{ tag.name }}</span>
                <icon name="right"></icon>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click.native="createTag">新建标签</Button>
        </div>
    </layout>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import Button from "@/components/Button.vue";

@Component({
    components: {Button}
})
export default class Labels extends Vue {
    tagsAll = tagListModel.fetch();

    createTag() {
        const name = window.prompt('请输入标签名')
        if (name) {
            const message = tagListModel.create(name)
            if (message === 'success') {
                return
            } else if (message === 'duplicated') {
                window.alert('标签名重复了')
            }
        }

    }

}
</script>

<style lang="scss" scoped>
.tags {
  background: rgba(152, 251, 152, 0.4);
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    text-decoration: none;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    color:#333;

    svg {
      color: pink;
      margin-right: 16px;
    }

  }
;
}

.createTag {
  background: #767676;
  color: white;
  border: none;
  border-radius: 3px;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>