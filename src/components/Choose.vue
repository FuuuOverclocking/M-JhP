<template>
    <div class="choose-btn"><slot></slot></div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class Choose extends Vue {

}
</script>

<style>
.choose-btn {
  text-align: center;
  background: #FFF;
  color: #666;
  cursor:default;
}
</style>
