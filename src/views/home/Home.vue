<template>
  <div id="home">
    <nav-bar class="home-nav"><div>购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>


<script>
import {getHomeMultidata} from 'network/home'

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommends: null
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends =res.data.recommend.list;
    });
  }
}
</script>


<style scoped>
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>