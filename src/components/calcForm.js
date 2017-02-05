import React, {Component} from 'react';
import {inject, observer} from 'mobx-react/native';
import {action} from 'mobx';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

@inject("store") @observer
class CalcForm extends Component {
    @action setHeight(val){
        this.props.store.height = val;
    }
    @action setWeight(val){
        this.props.store.weight = val;
    }
    render() {
        const {height, weight, heightUnit, weightUnit} = this.props.store;
        const weightPlaceHolder = "weight (" + weightUnit + ")";
        const heightPlaceHolder = "height (" + heightUnit + ")";
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputText}
                    placeholder={weightPlaceHolder}
                    keyboardType="numeric"
                    maxLength={5}
                    onChangeText={(val) => this.setWeight(val)}
                    value={weight}
                />
                <TextInput
                    style={styles.inputText} 
                    placeholder={heightPlaceHolder} 
                    keyboardType="numeric"
                    maxLength={5}
                    onChangeText={(val) => this.setHeight(val)}
                    value={height}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.store.calculate()}>
                    <Text style={styles.buttonText}>CALCULATE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.store.resetCalculator()}>
                    <Text style={styles.buttonText}>RESET</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  inputText:{
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
  },
  buttonContainer:{
     backgroundColor: '#2980b9',
     paddingVertical: 13,
     marginBottom: 7,
  },
  buttonText:{
      color: '#FFF',
      textAlign: 'center',
      fontWeight: '700'
  }
});

export default CalcForm;