import {observable, action, computed} from 'mobx';

class CalculatorStore {
    @observable height = '';
    @observable weight = '';
    @observable result = '';
    @observable weightUnit = 'kg';
    @observable heightUnit = 'cm';
    
    @action calculate(){
        if(this.weight == '' || this.height == ''){
            return;
        }
        const convtdHeight = this.convertedHeight;
        this.result = (this.convertedWeight / ((convtdHeight / 100) * (convtdHeight / 100))).toFixed(2);
    }

    @action resetCalculator(){
        if(this.height && this.weight){
            this.height = '';
            this.weight = '';
            this.result = '';
        }
    }

    @action changeWeightUnit(value){
        if(value){
            this.weightUnit = 'pound';
        }else{
            this.weightUnit = 'kg';
        }
        this.resetCalculator();
    }
    @action changeHeightUnit(value){
        if(value){
            this.heightUnit = 'm';
        }else{
            this.heightUnit = 'cm';
        }
        this.resetCalculator();
    }

    @computed get convertedWeight(){
        if(this.weightUnit === 'pound'){
            return this.weight * 0.453592;
        }
        return this.weight;
    }

    @computed get convertedHeight(){
        if(this.heightUnit === 'm'){
            return this.height * 100;
        }
        return this.height;
    }

    @computed get calculatedResult(){
        return this.result;
    }

    @computed get resultDescription(){
        if(this.result == ''){
            return 'No Result';
        }else if(this.result > 0 && this.result < 18.50){
            return 'Under Weight';
        }else if(this.result >= 18.50 && this.result < 25.00){
            return 'Normal';
        }else if(this.result >= 25.00 && this.result < 30.00){
            return 'Over Weight';
        }else if(this.result >= 30.00){
            return 'Obese';
        }
    }
}

export default CalculatorStore;