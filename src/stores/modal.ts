import { defineStore } from "pinia";
import { ref } from "vue";



export const useModalStore = defineStore('modal',()=>{

    const isModalopen = ref<boolean>(false)

    const toggelModal = ()=>{
        isModalopen.value = !isModalopen.value
    }


    return {isModalopen,toggelModal}
})