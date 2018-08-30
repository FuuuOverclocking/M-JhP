<template>
    <div id="page4" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p align="center" style="font-size:1.2em;">但是，如果告诉你，对方将选择研发，你现在又会怎么做呢？</p>
            <br>
            <br>
            <choose @touchstart.native.stop.prevent="clickBtn(false)" @mousedown.native.stop.prevent="clickBtn(false)">A. 研发</choose>
            <div id="page4-res" v-show="showRes"></div>
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

const fn = once(function(this: Page4, res: boolean) {
  document.getElementById("page4-res")!.innerHTML = res
    ? `仔细想想，你应该研发吗？如果你们双方都选择了研发，你的确得到了1份资金（5：1），但如果你不研发，但是对方选择研发，你将得到4份资金（4：4）。所以：你还是应该选择等待。`
    : `如果你不研发，但是对方选择研发，你将得到4份资金（4：4），但如果你们双方都选择了研发，你将只得到1份资金（5：1），所以：你选择了正确答案。`;
  
  this.showRes = true;
  this.allowNext = true;
  setTimeout(() => document.getElementById("page4-res")!.style.height = '33vh', 60);
});
@Component({
  components: {
    MenuBar,
    HintMsg,
    ContentBody,
    Choose
  }
})
export default class Page4 extends Vue {
  showRes: boolean = false;
  allowNext: boolean = false;
  gotoNext() {
     this.allowNext && ndPageController.run("page5");
  }
  clickBtn(res: boolean) {
    fn.call(this, res);
  }
}
</script>
<style>
#page4 {
  background: #cfc;
  transition: all 1s;
}
#page4 .choose-btn {
  position: relative;
  left: 20%;
  width: 60%;
  height: 2em;
  font-size: 1.4em;
  line-height: 2em;
}
#page4-res {
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
