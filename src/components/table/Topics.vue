<template>

    <div class="topic">
        {{ topic}}
    </div>
</template>

<script setup lang="ts">

defineProps<{
    topic: string
}>();


</script>

<style scoped>
.topic{
    border-bottom: 2px solid #000;
    text-align: center;
    padding: .5rem;
}
</style>