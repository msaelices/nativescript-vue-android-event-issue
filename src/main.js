import Vue from 'nativescript-vue';

import HelloWorld from './components/HelloWorld';

const application = require('tns-core-modules/application')

application.android.on(application.AndroidApplication.activityStartedEvent, args => {
  console.log('activityStarted event called!')
})

import './styles.scss';

Vue.config.silent = false;

new Vue({

  render: h => h(HelloWorld),
}).$start();
