<template>
	<div class="movie_body">
	  	<loading v-if="isLoading"></loading>
	  	<Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
			<ul>
				<li id="pulldownMsg">{{ pulldownMsg }}</li>
				<li v-for="m in movieList" :key="m.id" @tap="handleToDetails(m.id)">
					<div class="pic_show">
						<img :src="m.img | setWH('128.180')" >
					</div>
					<div class="info_list">
						<h2 @tap="handleToDetails">{{ m.nm }}</h2>
						<img v-if="m.version" src="@/assets/maxs.png" >
						<p>观众评分 <span class="grade">{{ m.sc }}</span></p>
						<p>主演: {{ m.star }}</p>
						<p>{{ m.showInfo }}</p>
					</div>
					<div class="btn_mall">
						购票
					</div>
				</li>
			</ul>
		</Scroller>
	</div>
</template>

<script>
export default {
	name: 'NowPlaying',
	data () {
		return {
			movieList: [],
			// 下拉提醒文本
			pulldownMsg: '',
			isLoading: true,
			// 上次切换的定位城市id
			prevCity: -1
		}
	},
	methods: {
		// 点击列表事件
        handleToDetails (id) {
			this.$router.push('/movie/detail/1/' + id)
		},
		handleToScroll (pos) {
			if (pos.y > 30) {
				this.pulldownMsg = '正在刷新'
			}
		},
		handleToTouchEnd (pos) {
			if (pos.y > 30) {
				this.axios.get('/api/movieOnInfoList?cityId=11').then((res) => {
					let msg = res.data.msg
					let moviels = res.data.data.movieList
					if (msg === 'ok') {
						this.pulldownMsg = '刷新成功'
						// 一秒后隐藏
						setTimeout(() => {
							this.movieList = moviels
							this.pulldownMsg = ''
						}, 1000);
					}
				})
			}
		}
    },
	activated () {
		var cityId = this.$store.state.city.id
		if (cityId === this.prevCity) { return }
		// 切换城市后加载要有动画
		this.isLoading = true
		this.axios.get('/api/movieOnInfoList?cityId=' + cityId).then((res) => {
			let msg = res.data.msg
			let moviels = res.data.data.movieList
			if (msg === 'ok') {
				this.movieList = moviels
				this.isLoading = false
				this.prevCity = cityId
			}
		})
	}
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{ margin:0; padding:0; border:none;}
.movie_body #pulldownMsg { margin: 0; padding: 0; border: none; }
</style>