import React, { Component } from 'react'
import { View } from 'react-native'
import { getCustomMetricMetaInfo } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciStepper from './UdaciSteppers'


export default class AddEntry extends Component {

  state = {
    run: 0,
    bike: 0,
    swin:0,
    sleep: 0,
    eat: 0,
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

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }

  render(){
    const metaInfo = getCustomMetricMetaInfo()
    return(
      <View>
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.setState[key]

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
      </View>
    )
  }
}
