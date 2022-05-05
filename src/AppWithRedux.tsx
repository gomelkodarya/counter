import React, {useCallback, useEffect} from 'react';
import './App.css';
import {CounterContainer} from "./components/CounterContainer/CounterContainer";
import {SettingInputContainer} from "./components/SettingInputContainer/SettingInputContainer";
import {useDispatch, useSelector} from "react-redux";
import {
    addMaxValueAC,
    addStartValueAC, changeSetValueAC,
    incValueAC, resetValueAC
} from "./redux/counterReducer";
import {AppStateType} from "./redux/reduxStore";


function AppWithRedux() {
    const dispatch = useDispatch()

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const isInitValue = useSelector<AppStateType, boolean>(state => state.counter.isInitValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)

    const addMaxValue = (value: number) => {
        dispatch(addMaxValueAC(value))
    }

    const addStartValue = (value: number) => {
        dispatch(addStartValueAC(value))
    }

    const incValue =(value: number) => {
        dispatch(incValueAC(value))
    }

    const resetValue =() => {
        dispatch(resetValueAC())
    }
    const changeSetValue =() => {
        dispatch(changeSetValueAC())
    }

    // useEffect(() => {
    //     if(localStorage.getItem('maxValue')){
    //         setMaxValue(Number(localStorage.getItem('maxValue')))
    //     }
    //     if(localStorage.getItem('startValue')){
    //         setStartValue(Number(localStorage.getItem('startValue')))
    //     }
    // },[])

    // const changeSetValue = ()=> {
    //     setIsInitValue(false)
    //     setValue(startValue)
    //     localStorage.setItem('startValue', JSON.stringify(startValue));
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue));
    // }

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

export default AppWithRedux;
