import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localStorageUtil";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, loadState())
export type AppStoreType = typeof store

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

// @ts-ignore
window.store = store
