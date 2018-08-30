<template>
    <div id="page7" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <mtitle msg="海盗岛屿"></mtitle>
        <content-body has-title="1">
            <p align="center" style="font-size:1.1em">
                社会需要是一方面，于我们自身呢，担当领导者又能获得什么实质上的利益吗？<br>
                作为规则的制定者，领导者当然可以在一定程度上优先考虑自己的利益，我们进入下一章节<br>
            </p>
        </content-body>
        <img id="page7-mt" src="img/money.png">
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
    Mtitle,
    HintMsg,
    ContentBody
  }
})
export default class Page7 extends Vue {
  gotoNext() {
    ndPageController.run("page8");
  }
}
</script>
<style>
#page7 {
  background: #cfc;
  transition: all 1s;
}
#page7-mt {
    position:absolute;
    width: 50%;
    left: 25%;
    bottom: 13%;
}
</style>
