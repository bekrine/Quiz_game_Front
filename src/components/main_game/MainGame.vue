<template>
    <main>
        <div class="game_intrface_warpper">
            <div class="score_quit_warpper">
                <Score/>
                <Quit @quit="()=>quitGameAndResiteScore()"/>
            </div>
            <div class="table_interface_warpper">
                <Table/>
            </div>
        </div>
  <Modal v-if="isModalopen">
      <div class="question_warpper">
          <Question :question="question"/>
          <div class="answer_warpper">
              <Answer :answers="answers" />
            </div>
        </div>
    </Modal>
</main>
</template>

<script setup lang="ts">
import Table from '../table/Table.vue';
import Question from '../question/Question.vue';
import Answer from '../answers/Answer.vue';
import Modal from '../modal/Modal.vue';
import Score from '../score/Score.vue';
import Quit from '../quit/Quit.vue';

import { useAnswersStore } from '../../stores/answers';
import  {useModalStore} from '../../stores/modal'
import { useStartGame } from '@/stores/startGame';
import { useScoreStore } from '@/stores/score';

import { storeToRefs } from 'pinia';

const storeAnswres =useAnswersStore()
const {answers,question} = storeToRefs(storeAnswres)

const storeModal = useModalStore()
const {isModalopen} = storeToRefs(storeModal)

const startGameStore = useStartGame()
const {quitGame} = startGameStore

const scoreStore = useScoreStore()
const {resiteScore} = scoreStore


const quitGameAndResiteScore = () =>{
    quitGame()
    resiteScore()
}

</script>

<style scoped>
main{
  width: 100%;
  height: 100vh;

}
.answer_warpper{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.game_intrface_warpper{
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100%;
}
.score_quit_warpper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.table_interface_warpper{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.question_warpper{
    width: 80%;
}
</style>