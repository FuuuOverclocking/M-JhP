<template>
    <div id="page12" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p>
最后，作为1号的领导者只要提出（98，0，1，0，1）的方案，3号和5号就将投票给1号，因为这个结果比轮到2号分配时的要好，再加上1号自己的一票，就能高枕无忧地私吞这97枚金币了。
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <transition name="fade">
            <p align="center" v-show="over"><span style="color:#FFF;font-size:2em;">Game Over~</span><br><span style="color:#666;font-size:1em;">将返回开始界面</span></p>
            </transition>
        </content-body>
        <hint-msg msg="轻触屏幕以继续" v-show="!over"></hint-msg>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MenuBar from "../MenuBar.vue";
import HintMsg from "../HintMsg.vue";
import Mtitle from "../Mtitle.vue";
import ContentBody from "../ContentBody.vue";
import { ndPageController } from '@/pageController';
@Component({
  components: {
    MenuBar,
    HintMsg,
    ContentBody
  }
})
export default class Page12 extends Vue {
  over = false;
  gotoNext() {
    this.over = true;
    setTimeout(()=> ndPageController.run("homepage"), 2000);
  }
}
</script>
<style>
#page12 {
  background: #cfc;
  transition: all 1s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
