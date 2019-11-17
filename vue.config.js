module.exports = {
    // publicPath: '/lovemovie',
    devServer: {
        // 反向代理
        proxy: {
            '/api': {
                target: 'http://39.97.33.178', //目标ip地址
                changeOrigin: true //是否改变地址
            }
        }
    }
}