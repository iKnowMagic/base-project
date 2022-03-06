import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
        meta: {
          title: 'Welcome'
        }
      }
    ]
  }
]
