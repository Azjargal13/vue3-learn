<template>
    <div>
        <button @click="increase"> Increase by 10,  Here is counter : {{count}}</button>
        <button @click="decrease"> Decrease by 10,  Here is counter : {{count}}</button>
    </div>
</template>

<script lang="ts">
    import {mixins } from 'vue-class-component';
    import Count from "../mixin/Count"


    export default class Counter  extends mixins(Count) {
        increase=()=>{
            this.count +=10
        }
        decrease=()=>{
            this.count-=10
        }
    }
</script>

<style scoped>

</style>