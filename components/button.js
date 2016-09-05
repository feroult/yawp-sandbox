import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} disabled={this.props.disabled}> Run Code </button>
    )
  }
}

export default Button;
