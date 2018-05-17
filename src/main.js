import Vue from 'nativescript-vue';

import HelloWorld from './components/HelloWorld';

const application = require('tns-core-modules/application')

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  render: h => h(HelloWorld),

  created () {
    application.android.on(application.AndroidApplication.activityStartedEvent, args => {
      console.log('Calling activityStarted event...')
    })
  }
}).$start();
