import React from 'react'

import SandboxInput from './input'
import SandboxOutput from './output'
import SandboxUrlBox from './url_box'

class Sandbox extends React.Component {
  constructor(props) {
    super(props)
    this.runCode = this.runCode.bind(this)
    window.logOutput = window.logOutput.bind(this)
    window.logException = window.logException.bind(this)
    window.logClear = window.logClear.bind(this)
    window.printCode = window.printCode.bind(this)
    window.runCode = this.runCode
  }
  render() {
    return (
      <div>
        <SandboxUrlBox ref={(c) => this.urlBox = c} />
        <br />
        <SandboxInput ref={(c) => this.inputTextarea = c} submitCode={this.runCode}/>
        <br />
        <SandboxOutput ref={(c) => this.outputTextarea = c} />
      </div>
    )
  }
  runCode(code) {
    this.forceUpdate()
    try {
      eval(code)
    } catch (e) {
      logException(e)
    }
  }
}

export default Sandbox
