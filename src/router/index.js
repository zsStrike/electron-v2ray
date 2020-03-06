import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ServerCom from '../views/Server'
import AddServer from '../views/AddServer'
import ManuallyInput from '../views/AddServer/ManuallyInput'
import VMess from '../views/AddServer/VMess'
import QRcode from '../views/AddServer/QRcode'
import Setting from '../views/Setting'
import Preference from '../views/Preference'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Server',
    component: ServerCom
  },
  {
    path: '/add-server',
    name: 'AddServer',
    component: AddServer,
    redirect: '/add-server/vmess',
    children: [
      {
        path: '/add-server/vmess',
        component: VMess
      },
      {
        path: '/add-server/qrcode',
        component: QRcode
      },
      {
        path: '/add-server/manually-input',
        component: ManuallyInput
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/preference',
    name: 'Preference',
    component: Preference
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
