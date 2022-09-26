import React from "react";

var card = {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "Image",
            "url": "http://adaptivecards.io/content/adaptive-card-50.png"
        },
        {
            "type": "TextBlock",
            "text": "Hello **Adaptive Cards!**"
        }
    ],
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "Learn more",
            "url": "http://adaptivecards.io"
        },
        {
            "type": "Action.OpenUrl",
            "title": "GitHub",
            "url": "http://github.com/Microsoft/AdaptiveCards"
        }
    ]
};

// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();

// Parse the card payload
adaptiveCard.parse(card);

// Render the card to an HTML element:
var renderedCard = adaptiveCard.render();

// And finally insert it somewhere in your page:
document.body.appendChild(renderedCard);

class AdaptiveCard extends React.Component {

    constructor() {
        super();
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