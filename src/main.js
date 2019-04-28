// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})


//自定义指令
// Vue.directive("rainbow",{
//   bind(el,binding,vnode){
//     //el 是使用指令的元素，binding是使用时传入的参数，
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// })

// Vue.directive("theme",{
//   bind(el,binding,vnode){
//     if(binding.value === 'wide'){
//       el.style.maxWidth = "1260px";
//     }else if(binding.value === 'narrow'){
//       el.style.maxWidth = "800px";
//     }
//   }
// })


//自定义全局过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })

// Vue.filter("snippet",(value) => {
//   return value.slice(0,80) + "...";
// })


/* eslint-disable no-new */
new Vue({
  router:router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
