<template>
    <view>
        <Edit :detail="detail" :goal="goal" @submit="submit"></Edit>
    </view>
</template>

<script>
    import todolists from "@/api/todolists.js"
    import Edit from "./edit.vue"
    import {
        getSetting
    } from "@/utils/store-utils.js"

    export default {
       components:{
           Edit
       },
        data() {
            return {
                detail: {
                    id: null,
                    title: '',
                    water: 0,
                    run: 0,
                    skipping: 0,
                    sit_up: 0,
                },
                goal: {}
            }
        },

        onLoad(options) {
            this.goal = getSetting()

            const item = JSON.parse(decodeURIComponent(options.item));
            this.detail.title = item.title
            this.detail.id = item.id
            if (this.detail.id) {
                this.getData();
            }
            console.log(this.detail.id)
        },

        methods: {
            async getData() {
                const res = await todolists.detail({
                    id: this.detail.id
                })
                this.detail = res.data
            },

            async submit(detail) {

                const res = await todolists.edit(detail)
                if (res.code == 0) {
                    uni.showToast({
                        title: "数据更新成功",
                        icon: "none"
                    })
                    this.detail.id = res.data.id
                    this.getData();
                } else {
                    uni.showToast({
                        title: "数据更新失败",
                        icon: "none"
                    })
                }
            },






            // await store.updateItem(this.id, {
            //     title: this.detail.title,
            //     create_time: this.detail.create_time,
            //     complete_time: this.detail.complete_time ? new Date() : null
            // })


            // this.getData();


        }
    }
</script>
