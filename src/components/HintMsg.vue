<template>
    <div id="hint-msg">
        {{msg}}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class HintMsg extends Vue {
    @Prop() private msg!: string;
}
</script>
<style>
@keyframes hintmsg-float {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
}
#hint-msg {
    position: absolute;
    width: 100%;
    font-size: 2em;
    color: #666;
    bottom: 5%;
    text-align: center;
    animation: hintmsg-float 1s infinite;
}
</style>
