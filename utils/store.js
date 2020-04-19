const storage_key = 'storage_key'

export default {
    async addItem(item) {
        const list = await this.loads()
        list.push(item)
        await this.dumps(list)
    },

    async updateItem(index, item) {
        const list = await this.loads()
        list.splice(index, 1, item)
         await this.dumps(list)
    },

    async getItem(index) {
        const list = await this.loads()
        console.log(list)
        return list[index]
    },

    async removeItem(index) {
        const list = await this.loads()
        list.splice(index, 1)
        await this.dumps(list)
    },

    async dumps(data) {
        return new Promise((resolve, reject) => {
            uni.setStorage({
                key: storage_key,
                data: data,
                success: function() {
                    resolve(true)
                },
                fail: function() {
                    reject(false)
                }
            });
        })
    },

    async loads() {
        return new Promise((resolve, reject) => {
            uni.getStorage({
                key: storage_key,
                success: function(data) {
                    let list = data.data;
                    if(!Array.isArray(list)){
                        list = [];
                    }
                    console.log(list)
                    resolve(list)
                },
                fail:function(err){
                    resolve([])
                }
            });
        })
    }
}
