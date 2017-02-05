import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Result = ({calculatedResult , resultDescription}) => {
    return(
        <View style={styles.resultContainer}>
            <Text style={styles.result}>{calculatedResult}</Text>
            <Text style={styles.status}>{resultDescription}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  resultContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result:{
    fontSize: 100,
    textAlign: 'center',
    color: '#FFF'
  },
  status:{
    fontSize: 20,
    textAlign: 'center',
    opacity: 0.7,
    color: '#FFF'
  }
});

export default Result;