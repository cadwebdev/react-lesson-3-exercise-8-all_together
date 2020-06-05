import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ChatWindow from './ChatWindow'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }]

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }

  newMessage = (username, text) => {
    this.setState((oldState) => ({
      messages: [...oldState.messages, { username: username, text: text }],
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow
            username={users[0].username}
            messages={this.state.messages}
            newMessage={this.newMessage}
          />
          <ChatWindow
            username={users[1].username}
            messages={this.state.messages}
            newMessage={this.newMessage}
          />
        </div>
      </div>
    )
  }
}

export default App
