import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import About from '@/pages/About'
import Teacher from '@/pages/teacher/Teacher'
import TecTable from '@/pages/teacher/TecTable'
import StuInfo from '@/pages/student/Student'
import chartJs from '@/pages/Chart/chartJS'
import eChart from '@/pages/Chart/eChart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/tectable',
      name: 'tectable',
      component: TecTable
    },
    {
      path: '/stuinfo',
      name: 'stuinfo',
      component: StuInfo
    },
    {
      path: '/chartjs',
      name: 'chartjs',
      component: chartJs
    },
    {
      path: '/echart',
      name: 'echart',
      component: eChart
    }
  ]
})
