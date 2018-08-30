<template>
    <div id="page8" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p align="center">
              有5名海盗截获了一个装有100金币的宝箱，但他们为了奖金的分配问题而争论不休，<b>每个人都想得到尽可能多的钱</b>，这时有人便提出：<br><br>
            <ul style="width: 90%;position:relative;left:5%;text-align:left;">
              <li>5人按抽签的顺序依次提方案</li>
              <li>首先由1号作为领导者提出分配方案</li>
              <li>然后5人表决，不少于半数同意，方案才被通过，否则他将被扔入大海喂鲨鱼，依此类推</li>
            </ul>
            <br>
            现在你是1号，也就是最先的领导者，如何保证自己在不被丢下海喂鱼的情况下获得尽可能多的金币？
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
export default class Page8 extends Vue {
  gotoNext() {
    ndPageController.run("page9");
  }
}
</script>
<style>
#page8 {
  background: #cfc;
  transition: all 1s;
}
</style>
