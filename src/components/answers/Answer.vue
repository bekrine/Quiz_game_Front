<template>
    <button class="answer" :class="{
        correct: isCorrect?.is_correct && isCorrect.answer_id == answer.id,
        in_correct: !isCorrect?.is_correct && isCorrect?.answer_id == answer.id
    }" :disabled="userHasChoisAnswer" v-for="answer in answers" :key="answer.id"
        v-on:click="() => validatUserAnswerAndScore(answer.id)">
        {{ answer.answer_text }}
    </button>

</template>

<script setup lang="ts">
import { useAnswersStore } from '@/stores/answers';
import { useScoreStore } from '@/stores/score';
import type { Answer } from '@/types/interfaces';
import { storeToRefs } from 'pinia';

const storeAnswres = useAnswersStore()
const { checkUserAnswer } = storeAnswres
const { isCorrect, userHasChoisAnswer } = storeToRefs(storeAnswres)

const storeScore = useScoreStore()
const { calculeScore } = storeScore

const validatUserAnswerAndScore = async (id: number) => {
    await checkUserAnswer(id)
    if (isCorrect.value) {

        calculeScore(isCorrect.value)
    }
}

defineProps<{
    answers: Answer[]


}>()


</script>

<style scoped>
.answer {
    border: none;
    border-radius: 10px;

    padding: .5rem;
    margin: .5rem;
    cursor: pointer;
}

.correct {
    background-color: #0f0;

}

.in_correct {
    background-color: #f00;
}
</style>