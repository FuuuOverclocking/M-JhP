<template>
    <div class="content" :class="Number(hasTitle)?'content-withtitle':'content-only'"><slot></slot></div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class ContentBody extends Vue {
  @Prop() private hasTitle!: string;
}
</script>
<style>
.content {
  position: absolute;
  width: 80%;
  left: 10%;
  text-align: justify;
  color: #333;
}
.content-withtitle {
  font-size: 2em;
  letter-spacing: 0.1em;
  line-height: 1.6em;
  top: 23%;
}
.content-only {
  font-size: 2.1em;
  letter-spacing: 0.1em;
  line-height: 1.6em;
  top: 13%;
}
</style>
