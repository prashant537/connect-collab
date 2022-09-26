import React from 'react';

const postedByStyle = {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1f1f1f',
    fontSize: 14,
    margin: 4,
    marginLeft: 16
};

export const PostedByComponent = ({title}) => (
  <div className="postedBy" style={postedByStyle}>
    {title}
  </div>
);
