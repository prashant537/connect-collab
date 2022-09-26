import React, { useState } from "react";
import "./Posts.css";
import 'react-chat-elements/dist/main.css';
import * as AdaptiveCards from "adaptivecards";

var card = {
  "type": "AdaptiveCard",
  "body": [
      {
          "type": "ColumnSet",
          "columns": [
              {
                  "type": "Column",
                  "items": [],
                  "width": "auto"
              },
              {
                  "type": "Column",
                  "items": [
                      {
                          "type": "TextBlock",
                          "weight": "Bolder",
                          "text": "Akshit Gupta",
                          "wrap": false
                      },
                      {
                          "type": "TextBlock",
                          "spacing": "None",
                          "text": "Posted On 15-07 06:10",
                          "isSubtle": true,
                          "size": "Small",
                          "wrap": false
                      }
                  ],
                  "width": "stretch"
              }
          ]
      },
      {
          "type": "TextBlock",
          "weight": "Bolder",
          "text": "Yay! I am excited",
          "wrap": false
      }
  ],
  "actions": [
    {
        "type": "Action.OpenUrl",
        "title": "Like",
        "url": "https://aka.ms/teamsfx-docs",
        "size": "Small"
    },
    {
      "type": "Action.OpenUrl",
      "title": "Comment",
      "url": "https://aka.ms/teamsfx-docs",
      "size": "Small"
    },
    {
      "type": "Action.OpenUrl",
      "title": "Share",
      "url": "https://aka.ms/teamsfx-docs"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.5"
};

// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();

// Parse the card payload
adaptiveCard.parse(card);

// Render the card to an HTML element:
var renderedCard = adaptiveCard.render();

export function Post2(props) {

  document.body.appendChild(renderedCard);

  return (
    <div className="post2">
      <div className="narrow page-padding" style="backgroundColor:black">
      </div>
    </div>
  );
}
