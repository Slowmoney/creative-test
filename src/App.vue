<script setup>
import Container from './components/Container.vue'
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import Card from './components/Card.vue';
import Like from "./components/Like.vue";

const store = useStore()
store.dispatch("getEntityList")
const items = computed(()=>store.state.list)
const likes = computed(()=>store.state.likes)
function setLike(id) {
    store.dispatch("setLike", id)
}
</script>

<template>
    <header></header>
    <main>
        <Container>
            
            <Card v-for="(e,i ) in items" :key="i" :data="e"><Like @click.capture="setLike(e.id)" :value="likes.has(e.id)"/></Card>
        </Container>
    </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
