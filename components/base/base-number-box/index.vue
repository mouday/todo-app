<template>
    <uni-number-box :value="value" @change="handleChange"></uni-number-box>
</template>

<script>
    export default{
        props:{
            value: {
                type: Number,
            }
        },
        
        methods:{
            handleChange(val){
                this.$emit('update:value', parseInt(val))
            }
        }
        
    }
</script>

<style>
</style>
