<template>
    <div id="page2" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p align="center">研发需要2份资金，<br>新市场将流入10份资金<br></p><br>
            <ul style="width: 90%;position:relative;left:5%;">
                <li>A的研发可使自己获得新市场的6成收入，B瓜分到4成</li>
                <li>B的研发则会使A分到9成，而自己分到1成</li>
                <li>如果双方同时研发，A将占领7成，而B分得3成</li>
                <li>当然，如果谁都不研发，谁都分不到流入的资金</li>
            </ul>
            <br><br>
            <p style="font-size:1.6em;text-align:center">于是...</p>
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
export default class Page2 extends Vue {
  gotoNext() {
    ndPageController.run("page3");
  }
}
</script>
<style>
#page2 {
  background: #cfc;
  transition: all 1s;
}
</style>
