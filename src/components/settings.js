import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/native';
import {action} from 'mobx';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    ScrollView
} from 'react-native';

@inject("store") @observer
class Settings extends Component {
    render() {
        const {weightUnit, heightUnit} = this.props.store; 
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>WEIGHT UNIT</Text>
                <View style={styles.row}>
                    <Text>Pound</Text>
                    <Switch value={(weightUnit === 'pound')} onValueChange={(value) => this.props.store.changeWeightUnit(value)}/>
                </View>
                <Text style={styles.defaultNote}>Default weight unit is Kilograms</Text>
                <Text style={styles.title}>HEIGHT UNIT</Text>
                <View style={styles.row}>
                    <Text>Metre</Text>
                    <Switch value={(heightUnit === 'm')} onValueChange={(value) => this.props.store.changeHeightUnit(value)}/>
                </View>
                <Text style={styles.defaultNote}>Default weight unit is Centimeters</Text>
           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#ecf0f1',
  },
  row:{
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 1,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title:{
      fontSize: 11,
      paddingLeft: 10,
      height: 50,
      paddingVertical: 30 
  },
  defaultNote:{
      fontSize: 11,
      paddingLeft: 10,
      paddingVertical: 10 
  }
});

export default Settings;