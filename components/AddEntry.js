import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { getCustomMetricMetaInfo, getMetricMetaInfo, timeToString } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciStepper from './UdaciSteppers'
import DateHeader from './DateHeader'

function SubmitBtn ({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {

  state = {
    run: 0,
    bike: 0,
    swin:0,
    sleep: 0,
    eat: 0
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]: count > max ? max : count
      }
    })
  }

  decrement = (metric) => {

    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      }
    })
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state

    // update redux

    this.setState(() => ({
      run: 0,
      bike: 0,
      swin:0,
      sleep: 0,
      eat: 0,
    }))

    //navigate to home

    // save in the db

    // clear local noification
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }

  render(){
    const metaInfo = getCustomMetricMetaInfo()
    return(
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
              ? <UdaciSlider
                value={value}
                onChange={(value) => this.slide(key, value)}
                {...rest}
                />
              : <UdaciStepper value={value}
                onIncrement={(value) => this.increment(key, value)}
                onDecrement={(value) => this.decrement(key, value)}
                {...rest}
                />
              }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}
