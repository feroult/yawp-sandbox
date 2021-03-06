import React from 'react'

import Button from './button'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/clouds';

class SandboxInput extends React.Component {
  constructor(props) {
    super(props)
    this.submitInput = this.submitInput.bind(this)
    this.state = { code: "" }
    this.onChange = this.onChange.bind(this)
  }
  render() {
    return (
      <div>
        <label className={"lead"} htmlFor="inputTextarea">Input:</label>
        <br/>
        <div style={{borderWidth: "1px", borderColor: "darkgrey", borderStyle: "solid"}}>
          <AceEditor ref={(c) => this._input = c} id="inputTextarea"
            mode="javascript"
            theme="clouds"
            onChange={this.onChange}
            name="inputTextarea"
            width="100%"
            editorProps={{$blockScrolling: true}} value={this.state.code} enableLiveAutocompletion={true} enableBasicAutocompletion={true}/>
        </div>
        <br/>
        <Button onClick={this.submitInput} disabled={false} className={"btn btn-primary"}> Run Code </Button>
      </div>
    )
  }
  submitInput() {
    let inputCode = this.state.code
    window.logClear(() => this.props.submitCode(inputCode))
  }
  onChange(code) {
    this.setState({code: code})
    return code
  }
}

export default SandboxInput
