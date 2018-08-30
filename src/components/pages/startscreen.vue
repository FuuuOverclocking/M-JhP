<template>
  <div id="startscreen">
    <img id="startscreen-logo" src="img/logo-big.png">
    <div id="startscreen-sg-btn" @mousedown.prevent="btnDown" @touchstart.prevent="btnDown" @mouseover="btnHover" @mouseout="btnNormal" @mouseup.prevent="btnNormal(), gotoNext()" @touchend.prevent="btnNormal(), gotoNext()">
      <span>启动</span>
      <span>程式</span>
      <img src="img/arrow.png">
    </div>
    <div id="volume-btn" @mouseup.prevent="toggleVolume" @touchend.prevent="toggleVolume"><img :src="volBtnBgSrc"></div>
    <div id="copyright">Copyright(c) 2018, 能鸽善鹉小分队.</div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ndMusic } from '@/ndMusic';
import { ndPageController } from '@/pageController';

let btn: any;

@Component
export default class Startscreen extends Vue {
  mounted() {
    btn = document.getElementById('startscreen-sg-btn');
  }
  btnNormal(e: any) {
    btn.style.background = 'transparent';
    btn.style.color = '#FFF';
  }
  btnDown(e: any) {
    btn.style.background = '#FFF';
    btn.style.color = '#666';
  }
  btnHover(e: any) {
    btn.style.background = 'rgba(255,255,255,0.2)';
  }
  private volBtnBgSrc = 'img/volume.png';
  private allowVol = true;
  toggleVolume() {
    this.allowVol = !this.allowVol;
    this.volBtnBgSrc = this.allowVol ? 'img/volume.png' : 'img/muted.png';
    ndMusic.run({playstate: this.allowVol});
  }
  gotoNext() {
    ndPageController.run('page1');
  }
}
</script>
<style>
@keyframes logo-slide {
from {
  top: 18%;
  opacity: 0;

}
to {
  top: 15%;
  opacity: 1;
}
}
#volume-btn {
  position:absolute;
  right: 6%;
  width: 12%;
  top: 3%;
  transform: scale(1);
}
#volume-btn :active {
  transform: scale(0.95);
}
#volume-btn > img {
  width: 100%;
}
#startscreen {
  width: 100%;
  height: 100%;
  background: #4dba87;
}
#startscreen-logo {
  position: absolute;
  width: 75%;
  top: 15%;
  left: 12.5%;
  animation: logo-slide 0.9s;
}
#startscreen-sg-btn {
  position: absolute;
  text-align: center;
  border: 4px solid #fff;
  color: #fff;
  font-size: 3.3em;
  line-height: 1.3em;
  width: 2.6em;
  height: 3.8em;
  bottom: 16%;
  left: calc(50% - 1.3em);
  cursor: default;
}
#startscreen-sg-btn > img {
  width: 60%;
}
#copyright {
  width: 100%;
  color: #ccc;
  text-align: center;
  font-size: 1.6em;
  position: absolute;
  bottom: 2%;
}
</style>
