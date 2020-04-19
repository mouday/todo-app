<template>
    <view class="container">
        <view class="list">
            <uni-card :is-full="true" :title="detail.title">

                <view class="item">
                    <text>喝水（杯）</text>
                    <text class="goal">{{goal.water}}</text>
                    <BaseNumberBox :value.sync="detail.water"></BaseNumberBox>
                </view>

                <view class="item">
                    <text>跑步（公里）</text>
                    <text class="goal">{{goal.run}}</text>
                    <BaseNumberBox :value.sync="detail.run"></BaseNumberBox>
                </view>

                <view class="item">
                    <text>跳绳（次）</text>
                    <text class="goal">{{goal.skipping}}</text>
                    <BaseNumberBox :value.sync="detail.skipping"></BaseNumberBox>

                </view>

                <view class="item">
                    <text>仰卧起坐（个） </text>
                    <text class="goal">{{goal.skipping}}</text>
                    <BaseNumberBox :value.sync="detail.sit_up"></BaseNumberBox>
                </view>


            </uni-card>
        </view>


        <view class="btn-list">
            <view class="btn">
                <button type="primary" @click="submit">确认</button>
            </view>
        </view>

    </view>
</template>

<script>
    import BaseNumberBox from "@/components/base/base-number-box/index"
    export default {
        name: "Edit",

        components: {
            BaseNumberBox
        },

        props: {
            detail: {
                type: Object,
                default: null,
            },
            goal: {
                type: Object,
                default: null,
            }
        },
        methods:{
            submit(){
                this.$emit('submit', this.detail)
            }
        }


    }
</script>

<style>
    .container {
        padding: 20px;
        font-size: 14px;
        line-height: 1.5;
    }

    .span {
        color: #666666;
    }


    .input {
        height: 20px;
        border: 1px solid #EEEEEE;
        padding: 10px 0;
        margin: 10px 0;
        font-size: 1.2rem;
    }

    .btn-list {
        display: flex;
        justify-content: center;
    }

    .btn {
        width: 50%;
        margin: 20px 10px;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    .count {
        margin-right: 20px;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* margin: 20px 0; */
        padding: 20px 0;
        border-bottom: 1px solid #EFEFEF;
        color: #333333;
        font-size: 14px;
    }

    .goal {
        color: #666666;
        font-size: 12px;
    }
</style>
