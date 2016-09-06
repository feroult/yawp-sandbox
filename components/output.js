import React from 'react'

import Button from './button'

class SandboxOutput extends React.Component {
  constructor(props) {
    super(props)
    this.appendLine = this.appendLine.bind(this)
    this.clearLines = this.clearLines.bind(this)
    this.state = { value: "" }
  }
  render() {
    return (
      <div>
        <label htmlFor="outputTextarea">Output:</label>
        <br/>
        <textarea id="outputTextarea" rows="10" cols="100" value={this.state.value} disabled>
        </textarea>
      </div>
    )
  }
  appendLine(line) {
    let newState = this.state.value + "\n" + line
    this.setState({ value: newState })
  }
  clearLines() {
    this.setState({ value: "" })
  }
}

export default SandboxOutput
