import { defineStore } from "pinia";
import { ref } from "vue";



export const useStartGame = defineStore('startGame',()=>{
    const isGmaeStart =ref<boolean>(false)

    const startGame = ()=>{
        isGmaeStart.value = true
    }
    const quitGame = ()=>{
        isGmaeStart.value = false
    } 
    return {isGmaeStart,startGame,quitGame}
})