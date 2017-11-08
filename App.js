import React from 'react';
import {
  View,
  Text,
  TouchableHighlight, //changes the color of an elemente when it is pressed
  TouchableNativeFeedback, // for android, it gives the ripple effect
  TouchableOpcaity, //changes the opacity of an elemente when it is pressed
  TouchableWithoutFeedback // it doesnt change nothing, but it needs a view as a child
} from 'react-native';
import AddEntry from './components/AddEntry'

export default class App extends React.Component {

  render() {
    return (
      <View>
        <AddEntry />
      </View>
    )
  }
}
