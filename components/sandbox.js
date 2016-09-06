import React from 'react'

import SandboxInput from './input'
import SandboxOutput from './output'

class Sandbox extends React.Component {
  constructor(props) {
    super(props)
    this.runCode = this.runCode.bind(this)
  }
  render() {
    return (
      <div>
        <SandboxInput ref={(c) => this.inputTextarea = c} submitCode={this.runCode}/>
        <br />
        <SandboxOutput ref={(c) => this.outputTextarea = c} />
      </div>
    )
  }
  runCode(code) {
    this.outputTextarea.clearLines()
    window.logOutput = window.logOutput.bind(this)
    window.logException = window.logException.bind(this)
    try {
      eval(code)
    } catch (e) {
      logException(e)
    }
  }
}

export default Sandbox
