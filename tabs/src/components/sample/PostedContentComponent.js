import React from 'react';

const postedContentStyle = {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1f1f1f',
    fontSize: 14,
    margin: 4,
    overflow: 'hidden'
};

export const PostedContentComponent = ({content}) => (
  <div className="postedContent" style={postedContentStyle}>
    {content}
  </div>
);
