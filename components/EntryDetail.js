import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { addEntry } from '../actions'
import { removeEntry } from '../utils/api'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import TextButton from './TextButton'

class EntryDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params

    const year = entryId.slice(0, 4)
    const month = entryId.slice(5, 7)
    const day = entryId.slice(8)

    return {
      title: `${month}/${day}/${year}`
    }
  }

reset = () => {
  const { remove, goBack, entryId } =  this.props
  remove()
  goBack()
  removeEntry(entryId)
}

  render () {
    return (
      <View>
        <TextButton onPress={this.reset} style={{margin: 20}}>
          RESET
        </TextButton>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    remove: () => dispatch(AddEntry({
      [entryId]: timeToString() === entryId
        ? getDailyReminderValue()
        : null
    })),
    goBack: () => navigation.goBack(),
  }
}

export default EntryDetail
