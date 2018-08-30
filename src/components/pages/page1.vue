<template>
    <div id="page1" @mousedown.prevent="gotoNext" @touchstart.prevent="gotoNext">
        <menu-bar></menu-bar>
        <mtitle msg="研发前的工作会议"></mtitle>
        <content-body has-title="1">X省鼓励企业开发新能源汽车，A是行业领头的大企业而B是一家小公司，研发需要2份的资金，而新市场共将流入10份资金。由于不优先研发的公司可以优先抢占市场，这就导致了接下来的情况</content-body>
        <img id="page1-mt" src="img/meeting.png">
        <hint-msg msg="轻触屏幕以继续"></hint-msg>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MenuBar from "../MenuBar.vue";
import HintMsg from '../HintMsg.vue';
import Mtitle from '../Mtitle.vue';
import ContentBody from '../ContentBody.vue';
import { ndPageController } from '@/pageController';
@Component({
  components: {
    MenuBar,
    HintMsg,
    Mtitle,
    ContentBody,
  }
})
export default class App extends Vue {
    gotoNext() {
        ndPageController.run('page2');
    }
}
</script>
<style>
#page1 {
  background: #4dba87;
  transition: all 1s;
}
#page1-mt {
    position:absolute;
    width: 50%;
    left: 25%;
    bottom: 13%;
}
</style>
