import type { IsCorrect } from "@/types/interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";



export const useScoreStore = defineStore('score', () => {

    const score = ref<number>(0)
    const possiblePoint = ref<number>(0)

    const calculeScore = (IsCorrect: IsCorrect) => {

        if (IsCorrect.is_correct) {
            score.value += possiblePoint.value
        }
    }
    const addPossiblePoint = (point: number) => {
        possiblePoint.value = point
    }

    const resiteScore = () =>{
        score.value=0
    }

    return { score, calculeScore, addPossiblePoint ,resiteScore}
})