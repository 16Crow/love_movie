<template>
    <div class="wrapper" ref="wrapper">
        <!-- vue提供的插槽标签，根据不同的内容分发 -->
        <slot></slot>
    </div>
</template>

<script>
// 引入better-scroll插件
import Scroll from 'better-scroll'
export default {
    name: 'Scroller',
    props: {
        handleToScroll: {
            type: Function,
            default: function () {}
        },
        handleToTouchEnd: {
            type: Function,
            default: function () {}
        }
    },
    mounted() {
        var scroll = new Scroll(this.$refs.wrapper, {
            // 启用tap事件
            tap: true,
            // 启用滚动事件，滚动时会派发scroll事件，会截流（短时间不重复触发），设置为2则不截流
            probeType: 1
        })
        this.scroll = scroll
        scroll.on('scroll', (pos) => {
            this.handleToScroll(pos) 
        })
        scroll.on('touchEnd', (pos) => {
            this.handleToTouchEnd(pos)
        })
    },
    methods : {
        toScrollTop(y){
            this.scroll.scrollTo(0, y);
        }
    }
}
</script>

<style scoped>
.wrapper {
    height: 100%;
    width: 100%;
}
</style>