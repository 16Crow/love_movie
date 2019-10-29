export default {
    path: '/cinema',
    component: () => import('@/views/Cinema') //按需导入，提高加载性能
}