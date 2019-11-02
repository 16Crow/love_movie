<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="i in hotLists" :key="i.id">
                        {{ i.nm }}
                    </li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="i in cityLists" :key="i.index">
                    <h2>{{ i.index }}</h2>
                    <ul>
                        <li v-for="item in i.list" :key="item.id">
                            {{ item.nm }}
                        </li>
                    </ul>
                </div>	
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(item, index) in cityLists" :key="item.index" @touchstart="handleToIndex(index)">
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
            cityLists: [],
            hotLists: []
        }
    },
    // 挂载后，从api接口获取数据
    mounted() {
        this.axios.get('/api/cityList').then((res) => {
            var msg = res.data.msg
            // console.log(res)
            if (msg === 'ok') {
                // 获取到city数组
                var cities = res.data.data.cities
                // 解构赋值
                let { cityLists, hotLists } = this.formatCity(cities)
                // 完成方法处理后的传值，可以进行渲染页面数据了
                this.cityLists = cityLists
                this.hotLists = hotLists
                // [
                //     { index: "A", list: [ { id: 11, nm: '阿里', isHot: 1, py: 'ali'}, {  } ] }
                // ]
            }
        })
    },
    methods: {
        // 将城市按照首字母排序，归并对应数组
        formatCity (cities) {
            var cityLists = []
            var hotLists = []
            // 遍历，获取热门城市
          
            // 遍历cities
            for ( let i = 0; i < cities.length; i++ ) {
                // 获取城市名拼音首字母
                var firstLetter = cities[i].py.substring(0,1).toUpperCase()
                if (cities[i].isHot === 1) {
                    hotLists.push(cities[i])
                }
                if ( toCom(firstLetter) ) {
                    // 如果首字母目前不存在的，则将新index加入到数组中
                    cityLists.push({ index: firstLetter, list: [{ nm : cities[i].nm , id : cities[i].id }] })
                } else {
                    // 已存在，则将城市加入相应index
                    for ( let j = 0; j < cityLists.length; j++ ) {
                        if ( firstLetter === cityLists[j].index ) {
                            cityLists[j].list.push({ nm : cities[i].nm , id : cities[i].id })
                        }
                    }
                    
                }
            }
            // 城市列表根据字母排序
            cityLists.sort((n1, n2) => {
                if ( n1.index < n2.index ) {
                    return -1
                } else if ( n1.index > n2.index ) {
                    return 1
                } else {
                    return 0
                }
            })

            function toCom (firstLetter) {
                for ( let i = 0; i < cityLists.length; i++ ) {
                    if ( cityLists[i].index === firstLetter ) {
                        return false
                    }
                }
                return true
            }
            // console.log(hotLists)
            // console.log(cityLists)
            // 返回结果
            return {
                cityLists,
                hotLists
            }
        },
        handleToIndex (index) {
            // 通过ref获取h2元素
            var h2 = this.$refs.city_sort.getElementsByTagName('h2')
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
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