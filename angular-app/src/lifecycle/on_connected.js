import * as angular from 'angular'
// import { AppModule, html } from './app.module'
import { AppModule, html } from '../root/app.module'

export const onConnected = (thisClass) => {
  loadAngularApp(thisClass)
}

function loadAngularApp (thisClass) {
  thisClass.innerHTML = html
  const name = `${AppModule}.instance`

  // create new module as we attaching `run` callback
  angular.module(name, [AppModule])
    .value('config', { title: thisClass.title })
    .run(() => {
      console.log(`Angular module ${AppModule} instance is running`)
      thisClass.dispatchEvent(new Event('load'))
    })

  thisClass.$injector = angular.bootstrap(thisClass, [name], {
    strictDi: true
  })
}
