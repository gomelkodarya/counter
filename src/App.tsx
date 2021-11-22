import React, {useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import {SettingInputContainer} from "./components/SettingInputContainer/SettingInputContainer";


function App() {
    const [value, setValue] = useState(0);
    const [errorMaxValue, setErrorMaxValue] = useState<string | null>(null);
    const [errorStartValue, setErrorStartValue] = useState<string | null>(null);
    const [maxValue, setMaxValue] =useState<number>(Number(localStorage.getItem('maxValue')))
    const [startValue, setStartValue] =useState<number>(Number(localStorage.getItem('startValue')))

    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(startValue));

    const addMaxValue = (value: number) => {
        if (value <= startValue) {
            setErrorMaxValue('Error')
            setMaxValue(value)
            return
        }
        if (errorMaxValue) {
            setErrorMaxValue('Value correct')
        }
        setMaxValue(value)
    }

    const addStartValue = (value: number) => {
        if(value<0 || value >= maxValue) {
            setErrorStartValue('Error')
            setStartValue(value)
            return
        }
        if (errorStartValue) {
            setErrorStartValue('Value correct')
        }
        setStartValue(value)
    }

    const incValue = (value: number): void => {
        if (value < maxValue) {
            const newValue = value + 1
            setValue(newValue)
        }

        if (value === maxValue) {
            setValue(value)
        }
    }

    const resetValue = () => {
        setValue(startValue)
    }

    return (
        <div className='container'>
            <SettingInputContainer
                maxValue={maxValue}
                startValue={startValue}
                addMaxValue={addMaxValue}
                addStartValue={addStartValue}
                value={value}
                incValue={incValue}
                errorMaxValue={errorMaxValue}
                errorStartValue={errorStartValue}
            />
            <CounterContainer
                value={value}
                maxValue={maxValue}
                startValue={startValue}
                incValue={incValue}
                resetValue={resetValue}
                errorMaxValue={errorMaxValue}
                errorStartValue={errorStartValue}
            />
        </div>
    );
}

export default App;
