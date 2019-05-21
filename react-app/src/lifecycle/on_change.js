import { render } from './connectors/react_render'

export const onChange = (thisClass, attrName, oldVal, newVal) => {
  console.log('React onChange', attrName, oldVal, newVal)
  switch (attrName) {
    case 'title':
      render(thisClass)
  }
}
