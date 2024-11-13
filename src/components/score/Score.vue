<template>
    <div class="score_warpper">
        <div>
            <h1>Your Score Is :</h1>
        </div>
        <div class="score_resulte">
           <span>{{ score }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useScoreStore } from '@/stores/score';
import { storeToRefs } from 'pinia';

const storeScore = useScoreStore()
const {score} = storeToRefs(storeScore)
</script>

<style scoped>
    .score_warpper{
        width: 100%;
        padding: .5rem;
        text-align: center;
        margin: .5rem;
     
    }
    span{
       
        font-size: 1.5rem;

    }
    .score_resulte{
        margin: 1.2rem;
    }
</style>