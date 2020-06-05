import React from 'react'
import PropTypes from 'prop-types'

const MessageWindow = (props) => {
  return (
    <ul className="message-list">
      {props.messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === props.username
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
MessageWindow.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
}

export default MessageWindow
