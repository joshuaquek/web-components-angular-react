import * as angular from 'angular'

export const onChange = (thisClass, attrName, oldVal, newVal) => {
  angularAppOnChange(thisClass, attrName, oldVal, newVal)
}

function angularAppOnChange (thisClass, attrName, oldVal, newVal) {
  console.log('Angular onChange', attrName, oldVal, newVal)

  if (!thisClass.$injector) {
    return
  }

  switch (attrName) {
    case 'title':
      const element = angular.element(thisClass)
      const config = element.injector().get('config')
      config.title = thisClass.title
      element.scope().$apply()
  }
}
