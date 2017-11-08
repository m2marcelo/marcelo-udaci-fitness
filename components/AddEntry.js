import React, { Component } from 'react'
import { View } from 'react-native'
import { getCustomMetricMetaInfo } from '../utils/helpers'

export default class AddEntry extends Component {
  render(){
    return(
      <View>
        {getCustomMetricMetaInfo('bike').getIcon()}
      </View>
    )
  }
}
