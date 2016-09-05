import React from 'react'

import Button from './button'

class SandboxInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="inputTextarea">Input:</label>
        <br/>
        <textarea id="inputTextarea" rows="10" cols="100">
        </textarea>
        <br/>
        <Button onClick={null} disabled={false} />
      </div>
    )
  }
}

export default SandboxInput
