<template>
    <div class="table_warpper">
        <div v-for="r in data" :key="data.id" class="colum_warpper">
            <Topics :topic="r.topic_name"/>
            <Questions :questions="r.questions"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topics from './Topics.vue';
import Questions from './Questions.vue';

import { useQuestionsStore } from '@/stores/questions';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
const storeQuestions = useQuestionsStore()
const {getQuestions} = storeQuestions
const {data} = storeToRefs(storeQuestions)

onMounted(async()=>{
    await getQuestions() 
})

</script>

<style scoped>
.table_warpper{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 80%;
   
}
.colum_warpper{
    border-right: 2px solid ;
}
.colum_warpper:last-child{
    border:none ;
}
</style>