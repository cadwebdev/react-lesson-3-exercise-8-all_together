import React, { Component } from 'react'
class NewMessageContainer extends Component {
  state = {
    newMessage: '',
  }

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.newMessage === ''
  }

  handleNewMessage = (event) => {
    this.setState({ newMessage: event.target.value })
  }

  sendMessage = (event) => {
    event.preventDefault()
    this.props.newMessage(this.props.username, this.state.newMessage)
    this.setState({ newMessage: '' })
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.sendMessage}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.newMessage}
            onChange={this.handleNewMessage}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewMessageContainer
