<script setup lang="ts">

import { storeToRefs } from 'pinia';
import MainGame from './components/main_game/MainGame.vue';
import StartGame from './components/start_game/StartGame.vue';
import {useStartGame} from './stores/startGame'

const startGameStore = useStartGame()
const {startGame} = startGameStore
const {isGmaeStart} = storeToRefs(startGameStore)

</script>

<template>
  <div class="start_game_main" v-if="!isGmaeStart">
    <StartGame  @start="()=>startGame()"/>
    </div>
    <MainGame v-if="isGmaeStart"/>
</template>

<style scoped>
.start_game_main{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>