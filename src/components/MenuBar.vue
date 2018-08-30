<template>
    <div id="menu-bar">
        <div id="backward-btn" @touchstart.stop.prevent="backward" @mousedown.stop.prevent="backward"><img src="img/backward.png"></div>
        <div id="homepage-btn" @touchstart.stop.prevent="homepage" @mousedown.stop.prevent="homepage"><img src="img/exit.png"></div>
    </div>
</template>
<style>
#menu-bar {
  position: absolute;
  width: 100%;
  height: 7%;
  top: 4%;
}
#menu-bar > div {
    position: absolute;
    height: 100%;
}
#menu-bar > div > img {
    height: 100%;
}
#backward-btn {
    left: 5%;
    height: 80% !important;
}
#homepage-btn {
    right: 5%;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ndPageController } from '@/pageController';

@Component
export default class MenuBar extends Vue {
    backward() {
        ndPageController.run('backward');
    }
    homepage() {
        ndPageController.run('homepage');
    }
}
</script>
