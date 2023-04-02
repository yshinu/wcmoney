<template>
    <layout>
        <div class="tags">
            <ul class="current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <div class="new">
                <button>新增标签</button>
            </div>
        </div>
        <div>
            <label class="notes">
                <span class="name">备注</span>
                <input type="text" placeholder="在这里输入备注">
            </label>
        </div>
        <div>
        <ul class="types">
            <li class="selected">支出</li>
            <li>收入</li>
        </ul>
        </div>
        <div class="numberPad">
        <div class="output">100元</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>ok</button>
            <button>0</button>
            <button>.</button>
        </div>
        </div>

    </layout>
</template>

<script lang="ts">


export default {
    name: "money",

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style.scss";
.tags{
    font-size: 14px;
    > .current{
        display: flex;
        li{
            background: #16982b;
            height: 24px;
            border-radius: 12px;
            padding: 0 16px;
            margin-right:12px;
            line-height: 24px;
        }

    }
    > .new {
        margin: 16px 0;
        button {
            border: none;
            background: transparent;
            border-bottom: 1px solid;
            color: #999;
            padding: 0 3px;

        }
    }
}
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