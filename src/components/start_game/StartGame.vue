<template>

        <div class="start_game_main_button_warpper">
            <div class="start_game_main_button" @click="$emit('start')">Start Game</div>
        </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.start_game_main_button_warpper{
    width: 50%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.start_game_main_button{
    background-color: rgb(74, 70, 70);
    padding: 2rem 1.5rem;
    border-radius:10%;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 0 2px 0 rgb(74, 70, 70);
    transition:ease-in-out 1s ;
}
.start_game_main_button:hover{
    transform: scale(1.2) ;
    transition:ease-in-out 1s ;
   
}

</style>