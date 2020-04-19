<template>
    <view class="container">
        <text class="span">What to do next?</text>

        <view class="input">
            <input class="uni-input" v-model="title" placeholder="" />
        </view>

        <view class="">
            <button type="primary" @click="submit">submit</button>
        </view>

    </view>
</template>

<script>
    import todolists from "@/api/todolists.js"
    import store from "@/utils/store.js"
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            async submit() {

                // const res = await todolists.create({
                //     title: this.title
                // })
                // console.log(res)
                store.addItem({
                    title: this.title,
                    create_time: new Date()
                })

                uni.showToast({
                    title: "add success",
                    icon: "none"
                })
                uni.switchTab({
                    url: "/pages/index/index"
                })
            },
        }
    }
</script>

<style scoped>
    .container {
        padding: 20px;
        font-size: 14px;
        line-height: 24px;
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
</style>
