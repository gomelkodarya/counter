import React, {useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import {ValueContainer} from "./components/ValueContainer/ValueContainer";

function App() {
    // const
    let [value, setValue] = useState<number>(0);

    // who return types function
    const incValue = (value: number): void => {
        if (value < 5) {
            // const
            let newValue = value + 1
            setValue(newValue)
        }

        if (value === 5) {
            setValue(value)
        }
    }

    const resetValue = () => {
        setValue(value = 0)
    }

    return (
        <div className='container'>
            <ValueContainer

            />
            <CounterContainer
                value={value}
                incValue={incValue}
                resetValue={resetValue}
            />
        </div>
    );
}

export default App;
