import React from 'react'

import Button from './button'

class SandboxUrlBox extends React.Component {
  constructor(props) {
    super(props)
    this.applyUrl = this.applyUrl.bind(this)
    this.setValid = this.setValid.bind(this)
    this.state = {}
  }
  render() {
    var message = null
    if (this.state.success == true) message = <span style={{color: "#00FF00"}}>Endpoint valid!</span>
    else if (this.state.success == false) message = <span style={{color: "#FF0000"}}>Endpoint invalid!</span>
    return (
      <div>
        <input ref={(c) => this.inputTextarea = c} type="url" />
        <Button onClick={this.applyUrl} disabled={false} className={"btn btn-default"}>Apply API URL</Button>
        <br />
        {message}
      </div>
    )
  }
  applyUrl() {
    var mockYawp = window.yawp;
    mockYawp.config((c) => {
          c.baseUrl(this.inputTextarea.value);
          //c.defaultFetchOptions({credentials: 'include'});
    })
    yawp("").get("api").then(() => {
      yawp.config((c) => {
            c.baseUrl(this.inputTextarea.value);
            //c.defaultFetchOptions({credentials: 'include'});
      })
      this.setValid(true)
    }).catch(() => this.setValid(false))
  }
  setValid(bool) {
    this.setState({success: bool})
  }
}

export default SandboxUrlBox
