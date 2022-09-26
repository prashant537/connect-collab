import React from 'react';
import { ButtonComponent } from './ButtonComponent';
import { PostedByComponent } from './PostedByComponent';
import { PostedOnComponent } from './PostedOnComponent';
import { PostedContentComponent } from './PostedContentComponent';
import { SeparatorComponent } from './SeparatorComponent';
import { TagComponent } from './TagComponent';

const postStyle = {
    justifyContent: 'center',
    margin: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    color: 'white',
    borderColor: '#616161',
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'inline-block',
    width: '30%'
};

export const PostComponent = (props) => (
  <div className="post" style={postStyle}>
    <PostedByComponent title = {props.title}/>
    <PostedOnComponent dateTime= {props.dateTime}/>
    <SeparatorComponent />
    <PostedContentComponent content= {props.content}/>
    <SeparatorComponent />
    <TagComponent tag = {props.tags[0]}/>
    <TagComponent tag = {props.tags[1]}/>
    <TagComponent tag = {props.tags[2]}/>
    <SeparatorComponent />
    <ButtonComponent label = "Like" />
    <ButtonComponent label = "Comment" />
    <ButtonComponent label = "Share" />
  </div>
);
