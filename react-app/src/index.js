import { onAdopted, onConnected, onChange, onDisconnected } from './lifecycle'

class WebComponentElement extends HTMLElement {
  static get observedAttributes () { // WebComponent required method: Is used by built-in "attributeChangedCallback" lifecycle method. Equivalent of a ReactJS "props" declartion
    return ['title'] // ...basically like declaring your "props"
  }

  constructor () {
    super()
    console.log('ReactApp constructor', this)
  }

  adoptedCallback () { // WebComponent built-in lifecycle method: Runs when it is detached and reattached to a different page within the same stitching page
    onAdopted(this)
  }

  connectedCallback () { // WebComponent built-in lifecycle method: Runs when Webcomponent is attached
    console.log('ReactApp connected')
    onConnected(this)
  }

  disconnectedCallback () { // WebComponent built-in lifecycle method: Runs when Webcomponent is detached
    console.log('ReactApp disconnected')
    onDisconnected(this)
  }

  attributeChangedCallback (attrName, oldVal, newVal) { // WebComponent built-in lifecycle method: Runs when attribute is changed
    console.log('ReactApp attributeChanged')
    onChange(this, attrName, oldVal, newVal)
  }
}

const htmlTagName = 'react-app'
window.customElements.define(htmlTagName, WebComponentElement)
