import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

import type { Answer,IsCorrect } from "@/types/interfaces";



export const useAnswersStore = defineStore('answers', () => {
    const answers = ref<Answer[]>([])
    const isCorrect= ref<IsCorrect>({
        is_correct: false,
        answer_id: 0
    })
    const question = ref<string>('')
   const userHasChoisAnswer = ref<boolean>(false)

    const getAnswers = async (id: number | undefined,e:any) => {
     

        try {
            
            const res = await axios.get(`http://localhost:8000/api/getAnswers/${id}`)
            e.target.disabled = true
            if (res.status == 200) {
                answers.value = res.data.map((item: Answer) => { return {answer_text:item.answer_text ,id:item.id}})
                question.value = res.data[0].question_text
                userHasChoisAnswer.value=false
                
            } else {
                throw new Error(`Failed to fetch answers, status code: ${res.status}`)
            }
            


        } catch (error) {

            console.error('Error fetching answers:', error);
        }
    }

    const checkUserAnswer = async(id:number)=>{
        
        try {
            if(!userHasChoisAnswer.value){
                
                const res = await axios.get(`http://localhost:8000/api/checkAnswer/${id}`)
                if (res.status == 200) {
                    if (isCorrect.value) {
                        
                        
                        isCorrect.value.is_correct = res.data[0].is_correct
                        isCorrect.value.answer_id = id
                        userHasChoisAnswer.value=true
                        
                    }
                    
                    
                } else {
                    throw new Error(`Failed to fetch answers, status code: ${res.status}`)
                }
            }
            


        } catch (error) {

            console.error('Error fetching answers:', error);
        }
    }

    return { getAnswers,checkUserAnswer, answers ,isCorrect ,question,userHasChoisAnswer}
})

