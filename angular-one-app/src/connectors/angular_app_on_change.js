import * as angular from 'angular'

export const angularAppOnChange = function (thisClass, attrName, oldVal, newVal) {
  console.log('Angular One onChange', attrName, oldVal, newVal)

  if (!thisClass.$injector) { return } // End execution if the injector is not found

  // switch (attrName) {
  //   case 'title':
  //     const element = angular.element(thisClass)
  //     const config = element.injector().get('config')
  //     config.title = thisClass.title
  //     element.scope().$apply()
  // }

  const element = angular.element(thisClass)
  const config = element.injector().get('config')
  config[attrName] = thisClass[attrName]
  element.scope().$apply()
}
