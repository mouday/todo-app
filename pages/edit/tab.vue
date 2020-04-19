<template>
    <view>
        <Edit :detail="detail" :goal="goal" @submit="submit"></Edit>
    </view>
</template>


<script>
    import Edit from "./edit.vue"
    import {setSetting, getSetting} from "@/utils/store-utils.js"

    export default {
        components:{
            Edit
        },
        
        data() {
            return {
                detail: {},
                goal: {}
            }
        },

        onShow() {
            this.getData();
        },

        methods: {
            async getData() {
                this.detail = getSetting()
                this.detail.title = '设定目标'
            },

            async submit(detail) {
                setSetting(detail);
                uni.showToast({
                    title: "目标更新成功",
                    icon: "none"
                })
            }
        },

    }
</script>
