<script>
import { defineComponent } from "vue";

export default defineComponent({
    
});
</script>
<template>
<div class="container">
    <slot></slot>
</div>
</template>

<style lang="scss">
.container{
    margin: auto;
    @media screen and (min-width: 900px) {
        &{max-width: 900px;}
        
    }
}
</style>
