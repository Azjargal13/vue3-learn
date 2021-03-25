<template>
    <div>
  {{hey}}
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        const hey = ref('hellooo, its me')
        setTimeout(()=>{
            hey.value = "heyyyyyyyyyy"
        }, 2000)
        console.log('testing', hey, this)
        return {hey}
        
    }
})
</script>

<style scoped>

</style>