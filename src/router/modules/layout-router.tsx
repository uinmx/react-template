import { RouteObject } from 'react-router-dom'

import DefaultLayout from '@/layout'
import LazyLoad from '@/utils/lazyLoad'

const Home = LazyLoad(() => import('@/views/home'))
const About = LazyLoad(() => import('@/views/about'))

const AboutRouter: Array<RouteObject | any> = [
  {
    path: '/layout',
    element: <DefaultLayout />,
    meta: {
      title: 'layout',
      icon: 'el-icon-s-home',
      type: 'group'
    },
    children: [
      {
        path: '',
        element: <Home />,
        meta: {
          title: '首页',
          key: 'home',
          icon: 'el-icon-s-home'
        }
      },
      {
        path: 'about',
        element: <About />,
        meta: {
          title: '关于我们',
          key: 'about',
          icon: 'el-icon-s-home'
        }
      }
    ]
  }
]

export default AboutRouter
