import Vue from 'vue'
import App from './App.vue'
import { store } from './Store/store'

import upperFirst from 'lodash/upperFirst' 
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './Components/Base',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
}) 





new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
