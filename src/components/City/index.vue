<template>
    <div class="city_body">
        <loading v-if="isLoading"></loading>
        <Scroller v-else ref="city_body">
            <div class="city_list">
                <div class="city_hot">
                    <h2>热门城市</h2>
                    <ul class="clearfix">
                        <li v-for="i in hotList" :key="i.id" @tap="handleToCity(i.nm, i.id)">
                            {{ i.nm }}
                        </li>
                    </ul>
                </div>
                <div class="city_sort" ref="city_sort">
                    <div v-for="i in cityList" :key="i.index">
                        <h2>{{ i.index }}</h2>
                        <ul>
                            <li v-for="item in i.list" :key="item.id"  @tap="handleToCity(item.nm, item.id)">
                                {{ item.nm }}
                            </li>
                        </ul>
                    </div>	
                </div>
            </div>
        </Scroller>
        <div class="city_index">
            <ul>
                <li v-for="(item, index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">
                    {{ item.index }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'City',
    data () {
        return {
            cityList: [],
            hotList: [],
            isLoading: true
        }
    },
    // 挂载后，从api接口获取数据
    mounted() {
        var cityList = window.localStorage.getItem('cityList')
        var hotList = window.localStorage.getItem('hotList')
        // 读取本地存储
        if (cityList && hotList) {
            // 接收服务器数据一般是字符串，要用parse转换成对象
            this.cityList = JSON.parse(cityList)
            this.hotList = JSON.parse(hotList)
            // 从本地读取到数据，加载完成去掉loading
            this.isLoading = false
        } else {
            this.axios.get('/api/cityList').then((res) => {
            var msg = res.data.msg
            if (msg === 'ok') {
                // 获取到city数组
                var cities = res.data.data.cities
                // 解构赋值
                let { cityList, hotList } = this.formatCity(cities)
                // 完成方法处理后的传值，可以进行渲染页面数据了
                this.cityList = cityList
                this.hotList = hotList
                this.isLoading = false
                // 将数据存储到本地中，由于在向服务器发送数据时一般是字符串,我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串
                window.localStorage.setItem('cityList', JSON.stringify(cityList))
                window.localStorage.setItem('hotList', JSON.stringify(hotList))
                // [
                //     { index: "A", list: [ { id: 11, nm: '阿里', isHot: 1, py: 'ali'}, {  } ] }
                // ]
            }
        })
        }
    },
    methods: {
        // 将城市按照首字母排序，归并对应数组
        formatCity (cities) {
            var cityList = []
            var hotList = []
            // 遍历，获取热门城市
          
            // 遍历cities
            for ( let i = 0; i < cities.length; i++ ) {
                // 获取城市名拼音首字母
                var firstLetter = cities[i].py.substring(0,1).toUpperCase()
                if (cities[i].isHot === 1) {
                    hotList.push(cities[i])
                }
                if ( toCom(firstLetter) ) {
                    // 如果首字母目前不存在的，则将新index加入到数组中
                    cityList.push({ index: firstLetter, list: [{ nm : cities[i].nm , id : cities[i].id }] })
                } else {
                    // 已存在，则将城市加入相应index
                    for ( let j = 0; j < cityList.length; j++ ) {
                        if ( firstLetter === cityList[j].index ) {
                            cityList[j].list.push({ nm : cities[i].nm , id : cities[i].id })
                        }
                    }
                    
                }
            }
            // 城市列表根据字母排序
            cityList.sort((n1, n2) => {
                if ( n1.index < n2.index ) {
                    return -1
                } else if ( n1.index > n2.index ) {
                    return 1
                } else {
                    return 0
                }
            })

            function toCom (firstLetter) {
                for ( let i = 0; i < cityList.length; i++ ) {
                    if ( cityList[i].index === firstLetter ) {
                        return false
                    }
                }
                return true
            }
            return {
                cityList,
                hotList
            }
        },
        handleToIndex (index) {
            // 通过ref获取h2元素
            var h2 = this.$refs.city_sort.getElementsByTagName('h2')
            // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
            this.$refs.city_body.toScrollTop(-h2[index].offsetTop)
        },
        handleToCity (nm, id) {
            // 点击后，通过commit方法, 将传进的nm id 替换原有的状态属性
            this.$store.commit('city/CITY_INFO', { nm, id })
            // 将定位信息存储在本地，方便下次访问
            window.localStorage.setItem('nowNm', nm)
            window.localStorage.setItem('nowId', id)
            // 选择城市后，跳转到热映页面
            this.$router.push('/movie/now')
        }
    }
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>