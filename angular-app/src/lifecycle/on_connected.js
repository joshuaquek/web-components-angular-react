import { loadAngularApp } from './connectors/render_angular'

export const onConnected = (thisClass) => {
  loadAngularApp(thisClass)
}
