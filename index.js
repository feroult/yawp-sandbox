import React from 'react'
import ReactDOM from 'react-dom'

import Sandbox from './components/sandbox'

function renderYawpSandbox(element) {
  ReactDOM.render(
    <Sandbox />,
    element
  )
}

window.React = React;
window.renderYawpSandbox = renderYawpSandbox

let isWebpackDevServer = !!parent.document.getElementById("okness")
if (isWebpackDevServer) renderYawpSandbox(document.body)
