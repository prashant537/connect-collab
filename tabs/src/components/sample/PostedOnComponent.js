import React from 'react';

const postedOnStyle = {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: '.4rem',
    fontSize: 12,
    color: '#424242',
    margin: 4,
    marginLeft: 16
};

export const PostedOnComponent = ({dateTime}) => (
  <div className="postedOn" style={postedOnStyle}>
    {dateTime}
  </div>
);
