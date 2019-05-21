import { render } from '../connectors/react_render'

export const onConnected = (thisClass) => {
  render(thisClass)
}
