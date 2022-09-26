import React, { useState } from "react";
import "./Posts.css";
import 'react-chat-elements/dist/main.css';
import * as AdaptiveCards from "adaptivecards";
import MessageExtensionBot from "./MessageExtensionBot";
import PostCard from "./PostCard";


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
                          "text": "Prashant Tripathi",
                          "wrap": false
                      },
                      {
                          "type": "TextBlock",
                          "spacing": "None",
                          "text": "Posted On 15-07 06:06",
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
          "text": "Hello Folks! It's Hackathon-2022!",
          "wrap": false
      }
  ],
  "actions": [
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
var renderedCard1 = adaptiveCard.render();
var renderedCard2= adaptiveCard.render();



export function Posts(props) {

  document.body.appendChild(renderedCard);
  // document.body.appendChild(renderedCard1);
  // document.body.appendChild(renderedCard2);
  //document.body.style.backgroundColor = 'gray';

  // var elem = document.createElement('div');
  // elem.appendChild(renderedCard);
  
  // elem.style.borderWidth = '5';
  // elem.style.borderTopColor = 'black';

  // document.body.appendChild(elem);
  // document.appendChild(renderedCard);

  var e1 = document.createElement('e1');
  e1.style.backgroundColor = 'red';
  e1.append(renderedCard);

  document.body.appendChild(e1);
  

  return (
    <div className="posts">
      <div className="narrow page-padding" style="backgroundColor:black">
      </div>
    </div>
  );
}
