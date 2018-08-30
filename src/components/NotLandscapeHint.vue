<template>
  <div class="not-land-scape-hint">请切换至竖屏状态</div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class NotLandscapeHint extends Vue {}
</script>
<style>
.not-land-scape-hint {
  position: absolute;
  right: -180px;
  top: 20px;
  width: 150px;
  font-size: 1.6em;
  line-height: 30px;
  background: #0078D7;
  color: #FFF;
  border-radius: 15px;
}
</style>
