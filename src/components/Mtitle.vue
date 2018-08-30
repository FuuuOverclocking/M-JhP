<template>
    <div class="mtitle">{{msg}}</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
@Component
export default class Title extends Vue {
    @Prop() private msg!: string;
}
</script>

<style>
.mtitle {
    position:absolute;
    width: 100%;
    text-align: center;
    top: 13%;
    font-size: 3.6em;
    font-family: '幼圆';
    text-shadow: 0px 2px 3px #999;
}
</style>

