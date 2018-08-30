<template>
<div id="app">
  <not-landscape-hint id="not-landscape-hint"></not-landscape-hint>
  <div id="app-box">
    <transition name="loading-inout">
      <loading :loaded-num="resourceLoadedNum+'/'+resourceTotalNum" v-show="currentPageId === 'loading'"></loading>
    </transition>
    <startscreen v-show="currentPageId === 'startscreen'"></startscreen>
    <page1 v-show="currentPageId === 'page1'"></page1>
    <page2 v-show="currentPageId === 'page2'"></page2>
    <page3 v-show="currentPageId === 'page3'"></page3>
    <page4 v-show="currentPageId === 'page4'"></page4>
    <page5 v-show="currentPageId === 'page5'"></page5>
    <page6 v-show="currentPageId === 'page6'"></page6>
    <page7 v-show="currentPageId === 'page7'"></page7>
    <page8 v-show="currentPageId === 'page8'"></page8>
    <page9 v-show="currentPageId === 'page9'"></page9>
    <page10 v-show="currentPageId === 'page10'"></page10>
    <page11 v-show="currentPageId === 'page11'"></page11>
    <page12 v-show="currentPageId === 'page12'"></page12>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NotLandscapeHint from "./components/NotLandscapeHint.vue";
import * as pages from "./components/pages";

@Component({
  components: {
    NotLandscapeHint,
    ...pages,
  }
})
export default class App extends Vue {
  public currentPageId = "";
  public resourceLoadedNum = 0;
  public resourceTotalNum = 0;
}
</script>

<style>
* {
  border: 0 none;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Noble Scarlet", "PingFang SC",
    "Noto Sans CJK SC", "Source Han Sans CN", "Microsoft YaHei UI", sans-serif;
  font-size: 62.5%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: none;
}

#app {
  text-align: center;
  position: absolute;
}
#app-box {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
#app-box > div {
  width: 100%;
  height: 100%;
}

@media (min-width: 481px) {
  #app {
    margin: auto;
    width: calc(100vh * 0.625 - 20px * 0.625);
    top: 10px;
    bottom: 10px;
    left: 0;
    right: 0;
  }
  #app-box {
    border-radius: 3vh;
    background: #fff;
    box-shadow: 5px 3px 25px 1px rgba(0, 0, 0, 0.2);
  }
}
@media (max-width: 480px) {
  #app {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

#not-landscape-hint {
  display: none;
}

@media (max-width: 1024px) and (orientation: landscape) {
  #not-landscape-hint {
    display: block !important;
  }
}

.loading-inout-enter-active,
.loading-inout-leave-active {
  transition: all 0.5s;
}
.loading-inout-enter {
  opacity: 0;
}
.loading-inout-leave-to {
  background-color: #4dba87;
  color: #4dba87 !important;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}
@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}
@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
