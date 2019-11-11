export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    // movie下的子路由
    children: [
        { 
            path: '/movie',
            redirect: 'now' 
        },
        { 
            path: 'city', 
            component: () => import('@/components/City') 
        },
        { 
            path: 'now', 
            component: () => import('@/components/NowPlaying') 
        },
        { 
            path: 'comming', 
            component: () => import('@/components/CommingSoon') 
        },
        { 
            path: 'search', 
            component: () => import('@/components/Search') 
        },
        // NowPlaying
        { 
            path: 'detail/1/:movieId',
            components:  {
                default: () => import('@/components/NowPlaying'),
                detail: () => import('@/views/Movie/detail')
            },
            props: {
                detail: true
            }
        },
        // CommingSoon
        {
            path: 'detail/2/:movieId',
            components: {
                default: () => import('@/components/CommingSoon'),
                detail: () => import('@/views/Movie/detail')
            }
        }
    ]
}