export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    // movie下的子路由
    children: [
        { path: '/movie', redirect: 'now' },
        { path: 'city', component: () => import('@/components/City') },
        { path: 'now', component: () => import('@/components/NowPlaying') },
        { path: 'comming', component: () => import('@/components/CommingSoon') },
        { path: 'search', component: () => import('@/components/Search') }
    ]
}