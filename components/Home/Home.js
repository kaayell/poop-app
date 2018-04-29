import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import ActionButton from 'react-native-action-button'
import { BLUE, OFF_WHITE } from '../StyleGuide/colors'
import { POPPINS_MEDIUM } from '../StyleGuide/fonts'
import { Icon } from 'react-native-elements'
import style from '../StyleGuide/styles'
import Charts from '../Charts/Charts'

export class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/poop.png')}
               style={{width: 35, height: 35}}/>
      </View>),
    headerStyle: {
      backgroundColor: BLUE,
    },
    headerTitleStyle: {
      color: OFF_WHITE,
      fontFamily: POPPINS_MEDIUM,
      alignSelf: 'center'
    },
    headerRight:
      <Icon name={'perm-identity'} iconStyle={style.icon} color={'white'}
            onPress={() => {
              navigation.navigate('Profile')
            }}
            underlayColor={BLUE}
            size={25}/>,

  })

  constructor (props) {
    super(props)

    this.state = {
      minutesToDate: 0,
      moneyToDate: 0,
    }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Charts/>
        </View>
        <View style={{
          height: 100,
          flex: 1,
          backgroundColor: 'transparent',
        }}>
          <ActionButton position="center" buttonColor="rgb(154, 192, 205)">
            <ActionButton.Item
              buttonColor={BLUE}
              onPress={() => this.props.navigation.navigate('Create')}>
              <Icon name="add"/>
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor={BLUE}
              onPress={() => this.props.navigation.navigate('Timer')}>
              <Icon name="hourglass-empty"/>
            </ActionButton.Item>
          </ActionButton>
        </View>
      </View>)
  }
}

export default Home