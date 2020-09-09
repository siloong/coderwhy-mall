<template>
  <div class="recommend">
    <div class="recommend-item"
    v-for="(item, index) in recommends"
    :key="index">
      <a :href="item.link">
        <div>
          <img :src="item.image" alt="">
        </div>
        <div class="item-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>


<style>
  .recommend {
    display: flex;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
    padding: 6px;
    box-sizing: border-box;
  }

  .recommend-item img {
    width: 100%;
    padding-bottom: 2px;
  }

  .recommend-item .item-title {
    font-size: 14px;
  }
</style>