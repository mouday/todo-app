<template>
    <view class="container">
        <!-- 带描述信息 -->
        <uni-list>
            <uni-list-item class="item" v-for="(item, index) in list" :title="item.title" :note="item.complete_time? `complete time: ${formatDateTime(item.complete_time)}` :  `create time: ${formatDateTime(item.create_time)}`"
                :key="index" @click="goDetail(item.index)"></uni-list-item>
        </uni-list>

    </view>
</template>

<script>
    import uniList from "@/components/uni-list/uni-list.vue"
    import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
    import {
        formatDateTime
    } from "@/utils/index.js"


    import store from "@/utils/store.js"


    import todolists from "@/api/todolists.js"

    export default {
        components: {
            uniList,
            uniListItem
        },

        data() {
            return {
                list: [],
                currentPage: 1,
                pageSize: 10,
                formatDateTime,
            }
        },

        methods: {
            async getData() {
                // const list = await todolists.list({
                //     page: this.currentPage,
                //     size: this.pageSize
                // })

                // if (list.length == 0) {
                //     uni.showToast({
                //         title: "no more data",
                //         icon: "none"
                //     })
                // }

                // if (this.currentPage == 1) {
                //     this.list = list
                // } else {
                //     this.list.push(...list)
                // }

                this.list = await store.loads()
                this.list = this.list.map((item, index) => {
                    item.index = index;
                    return item
                })

                this.list =this.list.filter(item => {
                    if (item.complete_time) {
                        return item
                    }
                })
            },

            goDetail(id) {
                uni.navigateTo({
                    url: `/pages/edit/edit?id=${id}`,
                })
            }

        },

        onLoad() {

        },

        onShow(options) {
            this.currentPage = 1;
            this.getData();
        },

        // 下拉刷新
        onPullDownRefresh() {
            // console.log('下拉刷新')
            setTimeout(() => {
                // 关闭下拉刷新
                uni.stopPullDownRefresh();
            }, 500)

            this.currentPage = 1;
            this.getData()
        },

        // 上拉加载
        onReachBottom() {
            // console.log("翻页了")
            this.currentPage += 1;
            // this.getData()
        }


    }
</script>

<style scoped>
    .container {
        padding: 20px;
        font-size: 14px;
        line-height: 24px;
        height: 100vh;
    }

    >>>.item .uni-list-item__content-title {
        font-size: 1.2rem;
    }
</style>
