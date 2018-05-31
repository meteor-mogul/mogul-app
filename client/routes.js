import { Vue } from 'meteor/meteormogul:vue-dist';
import { VueRouter } from 'meteor/meteormogul:vue-router-dist';
import { fmHome } from './ui/views/home.js';

Vue.use(VueRouter);

const Foo = { template: '<span>foo</span>' };
const Bar = { template: '<span>bar</span>' };

const routes = [
  { path: '', component: fmHome },
  { path: '/', component: fmHome },
  { path: '/index.html', component: fmHome },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export { router };
