import React from 'react'

import Button from './button'

//import CodeMirror from '../codemirror/codemirror'

class SandboxOutput extends React.Component {
  constructor(props) {
    super(props)
    this.appendLine = this.appendLine.bind(this)
    this.clearLines = this.clearLines.bind(this)
    this.state = { value: "", style: {fontFamily: "monospace", fontSize: "1em", backgroundColor: "#efefef"} }
    window.output = this;
  }
  componentDidMount() {
    // try {
    //   window.editor = CodeMirror.fromTextArea(document.getElementById("container"), {
    //     lineNumbers: true,
    //     mode: "javascript"
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }
  render() {
    return (
      <div>
        <label htmlFor="outputTextarea">Output:</label>
        <br/>
        <textarea id="outputTextarea" rows="10" cols="100" value={this.state.value} style={this.state.style} readOnly>

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
  setLines(lines) {
    this.setState({ value: lines })
  }
  setExceptionStyle(flag) {
    var newStyle = this.state.style
    newStyle.backgroundColor = flag?"#ffefef":"#efefef"
    newStyle.color = flag?"#ee0000":"#000000"
    this.setState({style: newStyle})
  }
}

export default SandboxOutput
