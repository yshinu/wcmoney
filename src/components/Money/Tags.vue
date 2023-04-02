<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>

        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: "Tags"
}
</script>

<style lang="scss" scoped>
.tags{
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  font-size: 14px;
  > .current{
    flex-wrap: wrap;
    display: flex;
    li{
      background: #16982b;
      height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin:8px 12px;
      line-height: 24px;
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