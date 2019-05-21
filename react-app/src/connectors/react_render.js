import React from 'react'
import { render as reactRender } from 'react-dom'
import { App } from '../webapp/App'

export const render = (thisClass) => {
  reactRender(<App title={thisClass.title} />, thisClass)
}