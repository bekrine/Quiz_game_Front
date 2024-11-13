<template>
    <div class="question">
        {{ question }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    question:string
}>() 
</script>

<style scoped>
.question{
   text-align: center;
    padding: .5rem;
    margin: .5rem;
}
</style>