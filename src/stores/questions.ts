import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Question ,Topic} from "@/types/interfaces";


export const useQuestionsStore = defineStore('questions',()=>{
  
    let data =<any>ref()
    const getQuestions = async() =>{
        try {
            const res = await axios.get('http://localhost:8000/api/getQuestions')
           
            if(res.status == 200){
              
                for (let index = 0; index < res.data.length; index++) {
                    res.data[index].questions.sort((a: { difficulty: number; },b: { difficulty: number; })=>a.difficulty - b.difficulty)
                }
                data.value=res.data

        
                
            }else{
                throw new Error('error') 
            }
  
                       
        } catch (er) {
            console.log(er);
        }

    }
    return {getQuestions,data}
})

