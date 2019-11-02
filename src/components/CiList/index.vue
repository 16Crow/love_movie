<template>
    <div class="cinema_body">
        <ul>
            <li v-for="c in cinemaList" :key="c.id">
                <div>
                    <span>{{ c.nm }}</span>
                    <span class="q"><span class="price">{{ c.sellPrice }}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{ c.addr }}</span>
                    <span>{{ c.distance }}</span>
                </div>
                <div class="card">
                    <div v-for="(card, key) in c.tag" v-if="card===1" :key="key" :class="key | cardClass(key)">
                        {{ key | formatCard(key) }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CiList',
    data () {
        return {
            cinemaList: []
        }
    },
    mounted () {
        this.axios.get('/api/cinemaList?cityId=10').then((res) => {
            console.log(res)
            var msg = res.data.msg
            if (msg === 'ok') {
                this.cinemaList = res.data.data.cinemas
            }
        })
    },
    // 局部过滤器
    filters: {
        // 影院标签
        formatCard(key) {
            var card = [
                { name: 'allowRefund', value: '改签' },
                { name: 'endorse', value: '退' },
                { name: 'sell', value: '折扣卡' },
                { name: 'snack', value: '小吃' }
            ]
            for (let i = 0; i < card.length; i++) {
                if (card[i].name === key) {
                    return card[i].value
                }
            }
            return ''
        },
        // 标签样式
        cardClass(key) {
            var cardStyle = [
                { name: 'allowRefund', value: 'or' },
                { name: 'endorse', value: 'or' },
                { name: 'sell', value: 'bl' },
                { name: 'snack', value: 'bl' }
            ]
            for (let i = 0; i < cardStyle.length; i++) {
                if (cardStyle[i].name === key) {
                    return cardStyle[i].value
                }
            }
            return ''
        }
    }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>