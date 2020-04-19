import request from '@/utils/request.js'

export default {
    list(data) {
        return request({
            url: "/todolists/list",
            method: 'GEt',
            data: data
        })
    },

    detail(data) {
        return request({
            url: `/todolists/get/${data.id}`,
            method: 'GET'            
        })
    },

    edit(data) {
        return request({
            url: "/todolists/edit",
            method: 'POST',
            data: data
        })
    },
}
