import React, {useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import {ValueContainer} from "./components/ValueContainer/ValueContainer";

function App() {
    // const
    let [value, setValue] = useState<number>(0);
    let [maxValue, setMaxValue] =useState<number>(Number(localStorage.getItem('maxValue')))
    let [startValue, setStartValue] =useState<number>(Number(localStorage.getItem('startValue')))

    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(startValue));

    const addMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const addStartValue = (value: number) => {
        setStartValue(value)
    }
    // who return types function
    const incValue = (value: number): void => {
        if (value < maxValue) {
            // const
            let newValue = value + 1
            setValue(newValue)
        }

        if (value === maxValue) {
            setValue(value)
        }
    }

    const resetValue = () => {
        setValue(value = startValue)
    }

    return (
        <div className='container'>
            <ValueContainer
                maxValue={maxValue}
                startValue={startValue}
                addMaxValue={addMaxValue}
                addStartValue={addStartValue}
                value={value}
                incValue={incValue}
                resetValue={resetValue}/>
            <CounterContainer
                value={value}
                maxValue={maxValue}
                incValue={incValue}
                resetValue={resetValue}
            />
        </div>
    );
}

export default App;
