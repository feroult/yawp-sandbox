import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} disabled={this.props.disabled} className={this.props.className}>{this.props.children}</button>
    )
  }
}

export default Button;
