import React from 'react'
import MessageWindow from './MessageWindow'
import NewMessageContainer from './NewMessageContainer'
import PropTypes from 'prop-types'

const ChatWindow = (props) => {
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{props.username}</div>
      <MessageWindow username={props.username} messages={props.messages} />
      <NewMessageContainer
        username={props.username}
        newMessage={props.newMessage}
      />
    </div>
  )
}
ChatWindow.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  newMessage: PropTypes.func.isRequired,
}

export default ChatWindow
