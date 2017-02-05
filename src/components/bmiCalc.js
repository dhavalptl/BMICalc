import React, {Component} from 'react';
//import {connect} from 'react-redux';
import {inject, observer} from 'mobx-react/native';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import CalcForm from './calcForm';
import Result from './result';

@inject("store") @observer
class BMICalc extends Component {
    render() {
        const {calculatedResult, resultDescription} = this.props.store;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ScrollView scrollEnabled={false} contentContainerStyle={styles.container} keyboardShouldPersistTaps={"never"} keyboardDismissMode={"interactive"}>
                   <View>
                        <CalcForm/>
                    </View>
                   <Result calculatedResult={calculatedResult} resultDescription={resultDescription}/>
               </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#3498db'
  }
});

export default BMICalc;