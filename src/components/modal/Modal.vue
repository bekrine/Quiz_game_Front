<template>
    <div class="warpper" v-on:click.self="() => toggelModal()">
        <div class="warpper_content">
            <div class="close_button_modal">
                <div @click="()=>toggelModal()" class="close_button">X</div>
            </div>
            <div class="question_modal_warrper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal';

const storeModal = useModalStore()
const { toggelModal } = storeModal

</script>

<style scoped>
.warpper {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #cdc8c8;
    display: flex;
    justify-content: center;
    align-items: center;

}

.warpper_content {
    width: 75%;
    height: 80%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 10px 10px 0 0 #343333; 
}

.question_modal_warrper{
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
}
.close_button_modal{
    display: flex;
    justify-content: flex-end;
}
.close_button{
    margin:.5rem .5rem 0 0 ;
    background-color: red;
    padding: .1rem .2rem; 
    border-radius: 50%;
    cursor: pointer;
}
</style>