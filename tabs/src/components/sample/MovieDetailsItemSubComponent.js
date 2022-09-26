import React, {Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+

export const MovieDetailsItemSubComponent = () => <Fragment style={Button}>Your text here</Fragment>;

// const styles= StyleSheet.create({
//   viewStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignSelf: 'stretch'
//   },
//   subCompKeyStyle: {
//     flex: 1,
//     alignSelf: 'stretch',
//     textAlign: 'center',
//     margin: 5,
//     marginRight: 0,
//     padding: 5,
//     fontSize: 15,
//     fontWeight: 'bold',
//     borderRightWidth: 2,
//     color: 'rgb(179, 179, 179)',
//     borderColor: 'rgb(204, 204, 255)'
//   },
//   subCompValueStyle: {
//     flex: 1,
//     alignSelf: 'stretch',
//     textAlign: 'center',
//     margin: 5,
//     marginLeft: 0,
//     padding: 5,
//     fontSize: 15,
//     fontWeight: 'bold',
//     borderBottomWidth: 2,
//     borderColor: 'rgb(204, 204, 255)'
//   }
// })

const Button = {
  flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 5,
    marginRight: 0,
    padding: 5,
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    borderRightWidth: 2,
    color: 'rgb(179, 179, 179)',
    borderColor: 'rgb(204, 204, 255)'
}

export default MovieDetailsItemSubComponent;