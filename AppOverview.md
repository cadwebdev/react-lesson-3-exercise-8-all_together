-App (state: users, state: messages, state: handleNewMessage)
--ChatWindow(props: username, props: messages, props: handlenewMessage)
---MessageWindow(props: username, props: messages)
---NewMessageContainer(props: handleNewMessage)
----NewMessageForm(state: newMessage)
----NewMessageSend(props: handleNewMessage)
