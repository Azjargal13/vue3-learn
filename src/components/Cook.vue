<template>
    <h3>
        Cooking
    </h3>

    <p>
        Hello, friends
    </p>
    <button @click="counter"> 
         Increase by 1 . Here is counter: {{count}}
    </button>
     <button @click="decrease"> 
         Decrease by 1. Here is counter:  {{count}}
    </button>
    <counter/>
</template>

<script lang="ts">
import {  Options, mixins } from 'vue-class-component';
import Counter from "./Counter.vue"
import Count from "../mixin/Count"
@Options({
    components:{
        Counter
    }

})
export default class Cook extends mixins(Count) {
    counter(){
        this.count+=1
    } 
    decrease = () =>{
        this.count -=1
    }

}
</script>

<style scoped>

</style>