<template>
    <div id="page5" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p align="center" style="font-size:1.2em;">那么，我们再来看看大公司，因为小公司明智地选择了等待，你觉得大公司会怎么做？</p>
            <br>
            <br>
            <choose @touchstart.native.stop.prevent="clickBtn(false)" @mousedown.native.stop.prevent="clickBtn(false)">A. 研发</choose>
            <div id="page5-res" v-show="showRes"></div>
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

const fn = once(function(this: Page5, res: boolean) {
  document.getElementById("page5-res")!.innerHTML = `如果大公司选择研发，那他可以获得4份资金，如果等待，那么什么也获得不到。虽然不愿意让小公司分得这么多的资金，但为了自己的利益，他还是会选择研发。`;
  
  this.showRes = true;
  this.allowNext = true;
  setTimeout(() => document.getElementById("page5-res")!.style.height = '29vh', 60);
});
@Component({
  components: {
    MenuBar,
    HintMsg,
    ContentBody,
    Choose
  }
})
export default class Page5 extends Vue {
  showRes: boolean = false;
  allowNext: boolean = false;
  gotoNext() {
     this.allowNext && ndPageController.run("page6");
  }
  clickBtn(res: boolean) {
    fn.call(this, res);
  }
}
</script>
<style>
#page5 {
  background: #cfc;
  transition: all 1s;
}
#page5 .choose-btn {
  position: relative;
  left: 20%;
  width: 60%;
  height: 2em;
  font-size: 1.4em;
  line-height: 2em;
}
#page5-res {
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
