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
        <label className={"lead"} htmlFor="inputTextarea">Input:</label>
        <br/>
        <textarea ref={(c) => this._input = c} id="inputTextarea" rows="10" cols="100" style={{fontFamily: "monospace", fontSize: "1em"}}>
        </textarea>
        <br/>
        <Button onClick={this.submitInput} disabled={false} className={"btn btn-primary"}/>
      </div>
    )
  }
  submitInput() {
    let inputCode = this._input.value
    let modifiedCode = "logClear();\n" + inputCode.replace(new RegExp("console.log", "g"), "logOutput") + "\nprintCode()"
    console.log(modifiedCode)
    this.props.submitCode(modifiedCode)
  }
}

export default SandboxInput
