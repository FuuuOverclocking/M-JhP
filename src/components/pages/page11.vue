<template>
    <div id="page11" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p>
3号知道这一点，就会提出“99，0，1”的分配方案，因为对于5号来说，如果他投了反对票，4号将独吞所有金币，不如投支持票，1个金币虽然少但聊胜于无。这样3号再投自己一票就可以使分配方案通过了。<br>

2号推知3号的方案，就会提出“99，0，1，0”的方案，即放弃3号和5号，而给予4号一枚金币。由于该方案对于4号来说比在3号分配时更为有利，他将支持他而不希望他出局而由3号来分配。这样，算上2号自己的一票，方案将2:2平票通过。

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
export default class Page11 extends Vue {
  gotoNext() {
    ndPageController.run("page12");
  }
}
</script>
<style>
#page11 {
  background: #cfc;
  transition: all 1s;
}
</style>
