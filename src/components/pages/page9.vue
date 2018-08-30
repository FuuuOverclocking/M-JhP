<template>
    <div id="page9">
        <menu-bar></menu-bar>
        <content-body has-title="0">
            <div v-show="pirate<=5">
                先是——给5号多少钱呢？
                <div id="page9-box5" class="page9-box" v-show="money5 === -1">
                    <choose class="page9-btn page9-zero" @touchstart.native.stop.prevent="clickBtn(5, 0)" @mousedown.native.stop.prevent="clickBtn(5, 0)">不给</choose>
                    <input id="money-5" placeholder="输入金额" type="text">
                    <choose class="page9-btn page9-pay" @touchstart.native.stop.prevent="clickBtn(5)" @mousedown.native.stop.prevent="clickBtn(5)">给</choose>
                </div>
                <transition name="slide-fade">
                <div id="box5-res" class="page9-box box-res" v-show="money5!==-1">选择给5号 {{money5}}金币</div>
                </transition>
            </div>
            <div v-show="pirate<=4">
                接下来——给4号多少钱呢？
                <div id="page9-box4" class="page9-box" v-show="money4 === -1">
                    <choose class="page9-btn page9-zero" @touchstart.native.stop.prevent="clickBtn(4, 0)" @mousedown.native.stop.prevent="clickBtn(4, 0)">不给</choose>
                    <input id="money-4" placeholder="输入金额" type="text">
                    <choose class="page9-btn page9-pay" @touchstart.native.stop.prevent="clickBtn(4)" @mousedown.native.stop.prevent="clickBtn(4)">给</choose>
                </div>
                <transition name="slide-fade">
                <div id="box4-res" class="page9-box box-res" v-show="money4!==-1">选择给4号 {{money4}}金币</div>
                </transition>
            </div>
            <div v-show="pirate<=3">
                然后是——给3号多少钱呢？
                <div id="page9-box3" class="page9-box" v-show="money3 === -1">
                    <choose class="page9-btn page9-zero" @touchstart.native.stop.prevent="clickBtn(3, 0)" @mousedown.native.stop.prevent="clickBtn(3, 0)">不给</choose>
                    <input id="money-3" placeholder="输入金额" type="text">
                    <choose class="page9-btn page9-pay" @touchstart.native.stop.prevent="clickBtn(3)" @mousedown.native.stop.prevent="clickBtn(3)">给</choose>
                </div>
                <transition name="slide-fade">
                <div id="box3-res" class="page9-box box-res" v-show="money3!==-1">选择给3号 {{money3}}金币</div>
                </transition>
            </div>
            <div v-show="pirate<=2">
                最后——是给我们的2号多少钱呢？
                <div id="page9-box2" class="page9-box" v-show="money2 === -1">
                    <choose class="page9-btn page9-zero" @touchstart.native.stop.prevent="clickBtn(2, 0)" @mousedown.native.stop.prevent="clickBtn(2, 0)">不给</choose>
                    <input id="money-2" placeholder="输入金额" type="text">
                    <choose class="page9-btn page9-pay" @touchstart.native.stop.prevent="clickBtn(2)" @mousedown.native.stop.prevent="clickBtn(2)">给</choose>
                </div>
                <transition name="slide-fade">
                <div id="box2-res" class="page9-box box-res" v-show="money2!==-1">选择给2号 {{money2}}金币</div>
                </transition>
            </div>

            <div id="page9-hint"><br>{{hint[pirate]}}</div>
            <br>
            <transition name="slide-fade">
                <div id="page-finalres" class="page9-box box-res" style="font-size: 1.4em;color:#F00;" v-show="pirate<=1">{{getRes}}</div>
            </transition>
            <br>
            <choose v-show="pirate<=1" id="page9-re" @touchstart.native.stop.prevent="re" @mousedown.native.stop.prevent="re">重来</choose>
            <choose v-show="pirate<=1" id="page9-next" @touchstart.native.stop.prevent="gotoNext" @mousedown.native.stop.prevent="gotoNext">Why?</choose>
        </content-body>
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

@Component({
  components: {
    MenuBar,
    HintMsg,
    ContentBody,
    Choose
  }
})
export default class Page9 extends Vue {
  money2 = -1;
  money3 = -1;
  money4 = -1;
  money5 = -1;
  re() {
      this.money2=this.money3=this.money4=this.money5=-1;
      this.pirate = 5;
  }
  get money() {
    const money2 = ~this.money2 ? this.money2 : 0;
    const money3 = ~this.money3 ? this.money3 : 0;
    const money4 = ~this.money4 ? this.money4 : 0;
    const money5 = ~this.money5 ? this.money5 : 0;
    return 100 - money2 - money3 - money4 - money5;
  }
  get getRes() {
      let fd = 0;
      this.money2 <= 99 && ++fd;
      this.money3 <= 0 && ++fd;
      this.money4 <= 1 && ++fd;
      this.money5 <= 0 && ++fd;

      if(fd >= 3) return '你被扔下海了！';

      if(this.money2 === 0 && this.money3 === 1&&
      this.money4 === 0 && this.money5 === 1)
        return '你获得了最多的金币~';
      else return '虽然没有被扔下海，但其实可以得到更多金币..';
  }
  pirate = 5;
  hint = [
    ,
    ,
    "要知道，如果不能给出让他满意的金额，他很可能就会反对你，然后自己在他们4人中分配这100金币了",
    "要知道，分出去的钱越多自己的受益就越少哦",
    "",
    "虽然根本轮不到他来提分配方案，但是他的这一票也是很关键的，要不要考虑多分他一点钱拉拢一下呢？",
    ""
  ];
  gotoNext() {
    ndPageController.run("page10");
  }
  clickBtn(
    id: number,
    money: number = Number(
      (document.getElementById("money-" + id) as any).value
    )
  ) {
    if (isNaN(money) || money < 0 || money > this.money) {
      (document.getElementById("money-" + id) as any).value = "";
      return;
    }
    switch (id) {
      case 5:
        this.money5 = money;
        break;
      case 4:
        this.money4 = money;
        break;
      case 3:
        this.money3 = money;
        break;
      case 2:
        this.money2 = money;
        break;
    }
    this.pirate--;
  }
}
</script>
<style>
#page9 {
  background: #cfc;
  transition: all 1s;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#page9-re {
  position: relative;
  display:inline-block;
  left: 5%;
  width: 30%;
  height: 2em;
  font-size: 1.4em;
  line-height: 2em;
}
#page9-next {
  position: relative;
  display:inline-block;
  left: 20%;
  width: 40%;
  height: 2em;
  font-size: 1.4em;
  line-height: 2em;
}
#page9 input {
  box-sizing: border-box;
  height: 100%;
  font-size: 1em;
  width: 35%;
  padding-left: 3%;
  position: absolute;
  color: #666;
  right: 0;
}
.page9-box {
  position: relative;
  top: 1vh;
  height: 2em;
}
.box-res {
  text-align: center;
  width: 100%;
  color: rgb(156, 140, 48);
}
.page9-btn {
  position: absolute;
  right: 35%;
  width: 15%;
  height: 100%;
  line-height: 2em;
  background: #ddd;
}
.page9-zero {
  width: 30%;
  left: 0;
}
</style>
