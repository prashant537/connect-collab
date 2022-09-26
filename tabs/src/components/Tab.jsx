import React from "react";
import { PostComponent } from "./sample/PostComponent";

const divStyle = {
  borderColor: '#5b5fc7',
  borderWidth: 1
};

export default function Tab() {

  return (
    <div style={divStyle}>
      <PostComponent title= "Prashant Tripathi" dateTime= "Posted On 15-07 06:06" content= "Watta match! BlackCaps were way too good!" tags= {["#BackTheBlackcaps", "#T20WC", "#BleedBlue"]}/>
      <PostComponent title= "Akshit Gupta" dateTime= "Posted On 15-07 10:10" content= "Hey Folks, It's Hackathon time, Excited!" tags= {["#hackathon2022", "#scim", "#DefinePossible"]}/>
      <PostComponent title= "Soumyajit Pal" dateTime= "Posted On 05-08 19:39" content= "Please ping me if anyone has any project they want to work on for Hackathon (both within and out of DLP areas)!" tags= {["#projects", "#hackathon2022", "#dlp"]}/>
      <PostComponent title= "Shivam Khatri" dateTime= "Posted On 19-08 12:46" content= "What if I tell you that I know a problem which we all usually face?" tags= {["#hackathon2022", "#HackForLife", "#LetsHackIt"]}/>
      <PostComponent title= "Harshikesh Kumar" dateTime= "Posted On 22-08 16:32" content= "Did anyone received Hackathon SWAG kits till now?" tags= {["#SWAG", "#goodies", "#MicrosoftLife"]}/>
    </div>
  );
}
