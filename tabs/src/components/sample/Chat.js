import React from "react";
import { ChatFeed, Message } from "react-chat-ui";

const users = {
  0: "You",
  Prashant: "Prashant Tripathi",
  2: "Akshit Gupta"
};

const customBubble = (props) => (
  <div>
    <p>{`${props.message.senderName} ${props.message.id ? "says" : "said"}: ${
      props.message.message
    }`}</p>
  </div>
);

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        new Message({ id: "Prashant", message: "Hey Folks! It's Hackathon-2022", senderName: "Prashant Tripathi" }),
        new Message({
          id: 2,
          message: (
            <p>
              <span></span>Yay! I am excited!
            </p>
          ),
          senderName: "Akshit Gupta"
        })
      ],
      useCustomBubble: false,
      curr_user: 0
    };
  }

  render() {
    return (
      <div className="container">
        <div className="chatfeed-wrapper">
          <ChatFeed
            chatBubble={this.state.useCustomBubble && customBubble}
            maxHeight={250}
            messages={this.state.messages} // Boolean: list of message objects
            showSenderName
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
           
            
            
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
