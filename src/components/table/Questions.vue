<template>
    <div class="question_warpper"  v-for="question in questions">

        <button class="question"
            v-on:click="(e: any) => openGetAnswers(question.question_id, e,question.difficulty)" :key="question.question_id">
            {{ question.difficulty }}
        </button>
    </div>
</template>

<script setup lang="ts">
import type { Question } from '@/types/interfaces';
import { useAnswersStore } from '@/stores/answers';
import { useModalStore } from '@/stores/modal';
import { useScoreStore } from '@/stores/score';

const storeAnswres = useAnswersStore()
const { getAnswers } = storeAnswres

const storeModal = useModalStore()
const { toggelModal } = storeModal

const storeScore = useScoreStore()
const {addPossiblePoint} = storeScore

const openGetAnswers = (id: number | undefined, e: any,point:number) => {
    getAnswers(id, e)
    toggelModal()
    addPossiblePoint(point)
}

defineProps<{
    questions: Question[]
}>()
</script>

<style scoped>
.question {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding: .5rem;

}
.question_warpper{
    border-bottom: 2px solid;
}
.question_warpper:last-child{
    border: none;
}
</style>