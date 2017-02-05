import React, {Component} from 'react';
import {Provider} from 'mobx-react/native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableHighlight} from 'react-native';
import {useStrict} from 'mobx';
import CalculatorStore from './stores/calculatorStore';
import BMICalc from './components/bmiCalc';
import Settings from './components/settings';

useStrict(true);

const calculatorStore = new CalculatorStore();

const settingIcon = (
    <TouchableHighlight onPress={() => Actions.setting()}>
        <Icon name="ios-settings" size={22}/>
    </TouchableHighlight>
);

const App = () => (
    <Provider store={calculatorStore}>
        <Router>
            <Scene key="root">
                <Scene key="calculator" component={BMICalc} title="BMI Calculator" initial={true} renderRightButton={() => settingIcon} onRight={null}/>
                <Scene key="setting" component={Settings} title="Settings"/>
            </Scene>
        </Router>
    </Provider>);
export default App;