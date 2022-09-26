/**
 * Provides methods for formatting the various card types a bot can return.
 *
 * @remarks
 * All of these functions return an [Attachment](xref:botframework-schema.Attachment) object,
 * which can be added to an existing activity's [attachments](xref:botframework-schema.Activity.attachments) collection directly or
 * passed as input to one of the [MessageFactory](xref:botbuilder-core.MessageFactory) methods to generate a new activity.
 *
 * This example sends a message that contains a single hero card.
 *
 * ```javascript
 * const { MessageFactory, CardFactory } = require('botbuilder');
 *
 * const card = CardFactory.heroCard(
 *      'White T-Shirt',
 *      ['https://example.com/whiteShirt.jpg'],
 *      ['buy']
 * );
 * const message = MessageFactory.attachment(card);
 * await context.sendActivity(message);
 * ```
 */
import { AdaptiveCard } from "adaptivecards";
import React from "react";

const card = {
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
            "text": "Hola Folks! It's Hackathon-2022!",
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


class MessageExtensionBot extends React.Component{

    constructor(){
        super();
    }
        
    render() {
        return (<div className="post">
            <AdaptiveCard adaptiveCard={this.card} />
        </div>);
      }
}

export default MessageExtensionBot;
