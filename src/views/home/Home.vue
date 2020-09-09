<template>
  <div id="home">
    <!-- navigation component -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- swiper component -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- reconmmend component -->
    <recommend-view :recommends="recommends"></recommend-view>
    <!-- feature component -->
    <feature-view></feature-view>
    <!-- tab component -->
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>

    <ul>
      <li>muze1</li>
      <li>muze2</li>
      <li>muze3</li>
      <li>muze4</li>
      <li>muze5</li>
      <li>muze6</li>
      <li>muze7</li>
      <li>muze8</li>
      <li>muze9</li>
      <li>muze10</li>
      <li>muze11</li>
      <li>muze12</li>
      <li>muze13</li>
      <li>muze14</li>
      <li>muze15</li>
      <li>muze16</li>
      <li>muze17</li>
      <li>muze18</li>
      <li>muze19</li>
      <li>muze20</li>
      <li>muze21</li>
      <li>muze22</li>
      <li>muze23</li>
      <li>muze24</li>
      <li>muze25</li>
      <li>muze26</li>
      <li>muze27</li>
      <li>muze28</li>
      <li>muze29</li>
      <li>muze30</li>
      <li>muze31</li>
      <li>muze32</li>
      <li>muze33</li>
      <li>muze34</li>
      <li>muze35</li>
      <li>muze36</li>
    </ul>
  </div>
</template>


<script>
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from 'network/home';

export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: {page: 0, list: []},
        news: {page: 0, list: []},
        sell: {page: 0, list: []}
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
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
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    color: #fff;
    background-color: var(--color-tint);
  }
  .tab-control {
    position: sticky;
    top: 44px;
    background-color: aqua;
  }
</style>