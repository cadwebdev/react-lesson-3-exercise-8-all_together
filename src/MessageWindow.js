import React, { Component } from 'react'
class Message extends Component {
  render() {
    const username = this.props.username
    const messages = this.props.messages
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === username
                ? 'message sender'
                : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    )
  }
}
export default Message
