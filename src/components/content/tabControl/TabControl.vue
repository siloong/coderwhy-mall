<template>
  <div class="tab-control">
    <div class="tab-item"
    :class="{active: index === currentIndex}"
    @click="handleItem(index)"
    v-for="(item, index) in titles"
    :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>


<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      handleItem(index) {
        this.currentIndex = index;
      }
    }
  }
</script>


<style>
  .tab-control {
    display: flex;
  }

  .tab-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .tab-item span {
    /* display: inline-block; */
    padding: 6px;
  }

  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: solid 3px var(--color-tint);
  }
</style>