<template>
  <div id="loading-box">
    <div id="loading">
      <p>I'm Loading...</p>
      <p style="font-size: 0.8em;">{{loadedNum}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Loading extends Vue {
  @Prop() private loadedNum!: string;
}
</script>

<style>
#loading-box {
  color: dimgray;
}
#loading {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  font-size: 2.4em;
  width: 200px;
  height: 100px;
  line-height: 40px;
  margin-left: -100px;
  margin-top: -50px;
}
</style>
