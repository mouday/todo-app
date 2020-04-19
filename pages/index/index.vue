<template>
    <view class="container">
        <!-- 带描述信息 -->
        <uni-list>
            <uni-list-item class="item" v-for="(item, index) in list" :title="item.title" :note="item.status" :key="index"
                @click="goDetail(item)"></uni-list-item>
        </uni-list>
    </view>
</template>

<script>
    import uniList from "@/components/uni-list/uni-list.vue"
    import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
    import moment from "moment"
    import {
        getSetting
    } from "@/utils/store-utils.js"
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
                dateList: []
            }
        },

        methods: {

            createDateList() {
                // 7天数据
                this.dateList = [];

                for (let i = 0; i < 7; i++) {
                    let date = moment().subtract(i, 'days').format('YYYY-MM-DD');
                    console.log(date)
                    this.dateList.push({
                        title: date
                    })
                }

            },

            getItem(title, list) {
                for (let item of list) {
                    if (item.title == title) {
                        return item
                    }
                }
                return {
                    title: title
                }
            },

            getCompleteStatus(data) {
                const goal = getSetting()
                
                let complete = 0;
                let total = Object.keys(goal).length
                
                for (let [key, val] of Object.entries(goal)) {
                    console.log(key)
                    
                    if (data[key] >= val) {
                        complete++
                    }
                }
                return `已完成 ${complete}/${total}`
            },

            async getData() {
                const res = await todolists.list({
                    page: this.currentPage,
                    size: this.pageSize
                })

                
                this.list = this.dateList.map(item => {
                    let data = this.getItem(item.title, res.data.list)
                    data['status'] = this.getCompleteStatus(data)

                    return data
                })

            },

            goDetail(item) {
                uni.navigateTo({
                    url: '/pages/edit/page?item=' + encodeURIComponent(JSON.stringify(item)),
                })
            }

        },

        onLoad() {

        },

        onShow(options) {
            this.currentPage = 1;
            this.createDateList()
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
        },



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
