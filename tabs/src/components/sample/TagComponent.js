import React from 'react';

const tagStyle = {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 4,
    backgroundColor: '#5b5fc7',
    padding: 5,
    borderRadius: '.4rem',
    borderWidth: 1,
    display: 'inline-block'
};

export const TagComponent = ({tag}) => (
  <div className="tag" style={tagStyle}>
    {tag}
  </div>
);
