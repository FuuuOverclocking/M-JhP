<template>
    <div id="page10" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <p>
                其实最好的情况下我们可以分到98个金币，怎样，想到了吗？牢牢地把握住领导者的优势，不但可以消除死亡的威胁，收益还达到了最大。<br>

从后向前推，如果1至3号强盗都喂了鲨鱼，只剩4号和5号的话，4号将把100金币留给自己，然后投自己一票。由于在票数相同的情况下提议人有决定权，无论5号同不同意，4号都能毫无危险地将所有金币收入囊中。

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
export default class Page10 extends Vue {
  gotoNext() {
    ndPageController.run("page11");
  }
}
</script>
<style>
#page10 {
  background: #cfc;
  transition: all 1s;
}
</style>
