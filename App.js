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
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{height: 20}}/>
          <History />
        </View>
      </Provider>
    )
  }
}
