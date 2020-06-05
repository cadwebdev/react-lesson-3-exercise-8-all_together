import React, { Component } from 'react'
import MessageWindow from './MessageWindow'
import NewMessageContainer from './NewMessageContainer'

class ChatWindow extends Component {
  render() {
    const username = this.props.username
    const messages = this.props.messages

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>
        <MessageWindow username={username} messages={messages} />
        <NewMessageContainer />
      </div>
    )
  }
}
export default ChatWindow
