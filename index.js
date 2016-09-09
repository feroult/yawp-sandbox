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

//var log = "";

function format(output) {
  if (typeof(output) == "function") {
     return output.toString();
  } else if(typeof yourVariable === 'object') {
     return JSON.stringify(output, null, 2) + '\n';
  } else {
     return output;
  }
}

//This function is bound to the Sandbox component
function logClear(callback) {
  try {
    window.output.setExceptionStyle(false)
    window.output.clearLines(callback)
  } catch (e) { // Sometimes an exception occurs (React concurrency stuff)
    setTimeout(() => { logClear(callback) }, 200) // Retry it after 200ms
  }
}

//This function is bound to the Sandbox component
function logOutput() {
  var args = Array.prototype.slice.call(arguments);

  var output = args.reduce(function(prev, curr) {
      return format(prev) + ' ' + format(curr);
  });

  window.output.appendLine(output);
}

//This function is bound to the Sandbox component
function logException(output) {
  try {
    this.outputTextarea.setExceptionStyle(true)
    let finalError = "Exception occured: " + output.message + "\n" + output.stack
    this.outputTextarea.setLines(finalError)
  } catch (e) { // Sometimes an exception occurs (React concurrency stuff)
    setTimeout(() => { logException(output) }, 200) // Retry it after 200ms
  }
}

function printCode() {
  //this.outputTextarea.setLines(log)
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

document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(() => {
    var backlog = console
    console = {}
    console.backlog = backlog
    console.log = logOutput
    console.error = logException
    console.warn = logOutput
    console.debug = logOutput
  }, 500)
})
