import React from 'react';

const buttonStyle = {
    justifyContent: 'center',
    margin: 4,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: '.4rem',
    borderColor: '#5b5fc7',
    borderWidth: 1,
    fontWeight:'bold',
    color: '#5b5fc7',
    fontSize: 14,
    backgroundColor: '#ffffff'
};

export const ButtonComponent = ({ label, handleClick }) => (
  <button className="button" style={buttonStyle} onClick={handleClick}>
    {label}
  </button>
);
