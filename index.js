import React from 'react'
import ReactDOM from 'react-dom'

import Sandbox from './components/sandbox'

function renderYawpSandbox(element) {
  ReactDOM.render(
    <Sandbox />,
    element
  )
}

//This function is bound to the Sandbox component
function logOutput(output) {
  this.outputTextarea.appendLine(JSON.stringify(output))
}

//This function is bound to the Sandbox component
function logException(output) {
  let stringifiedError = JSON.stringify(output)
  let modifiedError = stringifiedError.replace(new RegExp("\\\\n", "g"), "\n")
  let finalError = "Exception occured:\n" + modifiedError
  this.outputTextarea.setState({value: finalError})
}

function defineToJson() {
  if (!('toJSON' in Error.prototype))
  Object.defineProperty(Error.prototype, 'toJSON', {
      value: function () {
          var alt = {}

          Object.getOwnPropertyNames(this).forEach(function (key) {
              alt[key] = this[key];
          }, this)

          return alt;
      },
      configurable: true,
      writable: true
  })
}

defineToJson()

window.logOutput = logOutput
window.logException = logException

window.React = React;
window.renderYawpSandbox = renderYawpSandbox

let isWebpackDevServer = !!parent.document.getElementById("okness")
if (isWebpackDevServer) renderYawpSandbox(document.body)
