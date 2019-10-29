<template>
    <div id="content">
        <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>上海</li>
                </ul>
            </div>
            <div class="city_sort">
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>阿拉善盟</li>
                        <li>鞍山</li>
                        <li>安庆</li>
                        <li>安阳</li>
                    </ul>
                </div>	
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'City'
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