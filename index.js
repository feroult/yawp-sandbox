import React from 'react'
import ReactDOM from 'react-dom'

import Sandbox from './components/sandbox'

import yawp from 'yawp'
window.yawp = yawp

function renderYawpSandbox(element) {
  ReactDOM.render(
    <Sandbox />,
    element
  )
}

var log = "";

function logClear() {
  this.outputTextarea.setExceptionStyle(false)
  this.outputTextarea.setLines("")
  log = "";
}

//This function is bound to the Sandbox component
function logOutput(output) {
  if (typeof(output) == "function") {
    log += output.toString()
  } else {
    log += JSON.stringify(output, null, 2) + "\n"
  }
}

//This function is bound to the Sandbox component
function logException(output) {
  this.outputTextarea.setExceptionStyle(true)
  let finalError = "Exception occured: " + output.message + "\n" + output.stack
  this.outputTextarea.setLines(finalError)
  log = ""
}

function printCode() {
  this.outputTextarea.setLines(log)
}

function implementErrorJSON() {
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

implementErrorJSON()

window.logOutput = logOutput
window.logException = logException
window.logClear = logClear

window.printCode = printCode

window.React = React
window.renderYawpSandbox = renderYawpSandbox

let isWebpackDevServer = !!parent.document.getElementById("okness")
if (isWebpackDevServer) renderYawpSandbox(document.body)
else renderYawpSandbox(document.getElementById("container"))
