<template>
    <div id="page3" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p align="center" style="font-size:1em;">现在，你是B公司的高层，如果我告诉你，A公司决定不研发，那么你的 选择是</p>
            <br>
            <br>
            <choose @touchstart.native.stop.prevent="clickBtn(false)" @mousedown.native.stop.prevent="clickBtn(false)">A. 研发</choose>
            <div id="page3-res" v-show="showRes"></div>
            <choose @touchstart.native.stop.prevent="clickBtn(true)" @mousedown.native.stop.prevent="clickBtn(true)">B. 等待</choose>
        </content-body>
        <hint-msg v-show="allowNext" msg="轻触屏幕以继续"></hint-msg>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MenuBar from "../MenuBar.vue";
import HintMsg from "../HintMsg.vue";
import Mtitle from "../Mtitle.vue";
import ContentBody from "../ContentBody.vue";
import Choose from "../Choose.vue";
import { ndPageController } from "@/pageController";
import once from "lodash/once";

const fn = once(function(this: Page3, res: boolean) {
  document.getElementById("page3-res")!.innerHTML = res
    ? `当你们都不选择研发，双方都既得不到什么也不会失去什么（0:0）<br>但如果你选择研发而对方不研发，你将亏损1份资金（9：-1）<br>所以：你选择了正确答案。`
    : `如果你选择研发而对方不研发，你将亏损1份资金（9：-1）<br>而如果你们都不选择研发，双方都既得不到什么也不会失去什么（0:0）<br>所以：你应该选择等待。`;
  
  this.showRes = true;
  this.allowNext = true;
  setTimeout(() => document.getElementById("page3-res")!.style.height = '33vh', 60);
});
@Component({
  components: {
    MenuBar,
    HintMsg,
    ContentBody,
    Choose
  }
})
export default class Page3 extends Vue {
  showRes: boolean = false;
  allowNext: boolean = false;
  gotoNext() {
     this.allowNext && ndPageController.run("page4");
  }
  clickBtn(res: boolean) {
    fn.call(this, res);
  }
}
</script>
<style>
#page3 {
  background: #cfc;
  transition: all 1s;
}
#page3 .choose-btn {
  position: relative;
  left: 20%;
  width: 60%;
  height: 2em;
  font-size: 1.4em;
  line-height: 2em;
}
#page3-res {
  background: #fff;
  position: relative;
  width: 90%;
  height: 0vh;
  padding: 2%;
  left: 5%;
  color: #4dba87;
  transition: all 0.6s;
  overflow: hidden;
}
</style>
