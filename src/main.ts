import Vue from 'vue';
import App from './App.vue';
import { raw } from 'eventnet';
import './registerServiceWorker';
import { ndPageController } from './pageController';
import { ndMusic } from './ndMusic';
import { ndResourceLoader, ndImgLoader, ndBgmLoader } from './resourceLoader';
import { ndCollector } from './util';

Vue.config.productionTip = false;

export const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');

export const appInstance = app.$children[0];

const ndInit = raw((ups, dws) => {
  dws[0]!('loading');
  dws[1]!();
});
ndInit
  .alsoPipe(ndPageController)
  .alsoArrow(ndResourceLoader);

ndResourceLoader
  .alsoPipe(ndImgLoader)
  .alsoPipe(ndBgmLoader)
  .alsoPipe(ndPageController);

ndImgLoader.arrowNext();
ndBgmLoader.arrowNext();
ndCollector()
  .arrowNext();

ndBgmLoader.pipe(ndMusic);

const ndLoaded = raw((ups, dws) => {
  // Chrome ^v66 cannot autoplay, see https://goo.gl/xX8pDD
  document.addEventListener('touchstart', playbgm);
  document.addEventListener('mousedown', playbgm);
  function playbgm() {
    dws.id('music')!({
      audioId: 0,
    });
    document.removeEventListener('mousedown', playbgm);
    document.removeEventListener('touchstart', playbgm);
  }
});

ndLoaded
  .alsoPipe(ndMusic, { id: 'music' });

ndInit.run();
