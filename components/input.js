import React from 'react'

import Button from './button'

class SandboxInput extends React.Component {
  constructor(props) {
    super(props)
    this.submitInput = this.submitInput.bind(this)
  }
  render() {
    return (
      <div>
        <label htmlFor="inputTextarea">Input:</label>
        <br/>
        <textarea ref={(c) => this._input = c} id="inputTextarea" rows="10" cols="100">
        </textarea>
        <br/>
        <Button onClick={this.submitInput} disabled={false} />
      </div>
    )
  }
  submitInput() {
    let inputCode = this._input.value
    let modifiedCode = inputCode.replace(new RegExp("console.log", "g"), "logOutput")
    this.props.submitCode(modifiedCode)
  }
}

export default SandboxInput
