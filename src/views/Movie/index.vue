<template>
  <div id="main">
    <!-- 头部标题 -->
    <Header title="电影"></Header>
    <!-- 中间内容 -->
      <div id="content">
        <!-- 二级路由 菜单 -->
        <div class="movie_menu" >
          <!-- 选择城市 -->
          <router-link to="/movie/city" class="city_name" tag="div">
					  <span>大连</span>
            <i class="iconfont icon-lower-triangle"></i>
				  </router-link>
          <div class="hot_swtich">
            <!-- 正在热映和即将上映 -->
            <router-link to="/movie/now" class="hot_item" tag="div">正在热映</router-link>
            <router-link to="/movie/comming" class="hot_item" tag="div">即将上映</router-link>
          </div>
          <!-- 搜索 -->
          <router-link to="/movie/search" class="search_entry" tag="div">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive> 
        
      </div>
      
      <!-- 底部导航栏 -->
    <Tab-Bar></Tab-Bar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'Movie',
  components: {
    Header,
    TabBar
  }
}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}

.slide-enter-active{ animation : 13s detailMove;}
@keyframes detailMove{
	0%{
		transform : translateX(100%);
	}
	100%{
		transform : translateX(0);
	}
}
</style>