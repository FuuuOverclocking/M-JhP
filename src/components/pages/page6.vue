<template>
    <div id="page6" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p align="center" style="font-size:1.2em">
                所以，只有实力强大的企业才能承担风险，作为领导者开拓市场，小企业更适合明智地“搭便车”。<br><br>
                当然现实生活中存在着大企业转型困难，管理不便等问题，小企业的弯道超车也是有可能的。<br><br>
                简言之，社会需要开拓创新、团队需要前进方向，这都导致了领导者的存在不可或缺。
            </p>
        </content-body>
        <hint-msg msg="轻触屏幕以继续"></hint-msg>
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
export default class Page6 extends Vue {
  gotoNext() {
    ndPageController.run("page7");
  }
}
</script>
<style>
#page6 {
  background: #cfc;
  transition: all 1s;
}
</style>
