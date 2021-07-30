import Vue from "vue";
import VueRouter from "vue-router";


import index from '../components/index'
import Contentt from '../components/Contentt'
import tables from '../components/tables'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
        path: '/index',
        name: 'index',
        component: index
    },{
        path: '/contentt',
        name: 'Contentt',
        component: Contentt
    },
        {
            path: '/tables',
            name: 'tables',
            component: tables
        }
    ]
})