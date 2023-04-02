<template>
    <layout class-prefix="layout">
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
            <button class="ok">ok</button>
            <button class="zero">0</button>
            <button >.</button>
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
.numberPad{
    .output{
        font-size: 36px;
        font-family: Consolas,monospace;
        padding: 9px 16px;
        text-align: right;
        box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.3);
    }
    .buttons{
        @extend %clearFix;
        > button{
            float: left;
            width: 25%;
            height: 8vh;
            background: transparent;
            border: none;
            box-shadow: 0 0 2px rgba(124,252,0,0.2);
            $bg:rgba(152,251,152,0.4);
            &.ok{
                height: 16vh;
                float: right;
            }
            &.zero{
                width: 25*2%;
            }
            &:nth-child(1),&:nth-child(5),&:nth-child(9){
                background: $bg;
            }
            &:nth-child(2),&:nth-child(6),&:nth-child(10){
                background: darken($bg,4%);
            }
            &:nth-child(3),&:nth-child(7),&:nth-child(11){
                background: darken($bg,8%);
            }
            &:nth-child(4),&:nth-child(8){
                background: darken($bg,12%);
            }
            &:nth-child(12){
                background: darken($bg,16%);
            }
            &:nth-child(13),&:nth-child(14){
                background: darken($bg,20%);
            }
        }
    }
}
</style>
<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column;
}

</style>