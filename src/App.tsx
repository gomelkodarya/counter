import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import {SettingInputContainer} from "./components/SettingInputContainer/SettingInputContainer";


function App() {
    const [value, setValue] = useState(0);
    const [error, setError] = useState(false);
    const [isInitValue, setIsInitValue ] = useState(false)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

    useEffect(() => {
       if(localStorage.getItem('maxValue')){
            setMaxValue(Number(localStorage.getItem('maxValue')))
       }
        if(localStorage.getItem('startValue')){
            setStartValue(Number(localStorage.getItem('startValue')))
        }
    },[])

    const addMaxValue = (value: number) => {
        setIsInitValue(true)
        if (value <= startValue) {
            setError(true)
            setMaxValue(value)
            return
        }
        if(error) {
            setError(false)
        }
        setMaxValue(value)
    }

    const addStartValue = (value: number) => {
        setIsInitValue(true)
        if(value<0 || value >= maxValue) {
            setError(true)
            setStartValue(value)
            return
        }
        if(error) {
            setError(false)
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

    const changeSetValue = ()=> {
        setIsInitValue(false)
        setValue(startValue)
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
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
                changeSetValue={changeSetValue}
                isInitValue={isInitValue}
                error={error}
            />
            <CounterContainer
                value={value}
                maxValue={maxValue}
                startValue={startValue}
                incValue={incValue}
                resetValue={resetValue}
                error={error}
                isInitValue={isInitValue}
            />
        </div>
    );
}

export default App;
