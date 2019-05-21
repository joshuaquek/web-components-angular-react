import { angularAppOnChange } from '../connectors/angular_app_on_change'

export const onChange = (thisClass, attrName, oldVal, newVal) => {
  angularAppOnChange(thisClass, attrName, oldVal, newVal)
}
