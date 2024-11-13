<template>
    <div class="quit_button_warpper">
        <div @click="$emit('quit')" class="quit_button">Quit</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.quit_button_warpper{
    width: 100%;
   justify-content: center;
   align-items: center;
   display: flex;

}
.quit_button{
    width: 30%;
    background-color: rgb(201, 12, 12);
    color: #fff;
    padding: .5rem .8rem;
    text-align: center;
    border-radius: 10%;
    cursor: pointer;
}
</style>