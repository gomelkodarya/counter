const initialState = {
    value: 0,
    error: false,
    isInitValue: false,
    maxValue: 5,
    startValue: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MAX-VALUE':
            if (action.value <= state.startValue) {
                return {
                    ...state,
                    error: true,
                    maxValue: action.value
                }
            }
            return {
                ...state,
                isInitValue: true,
                maxValue: action.value,
                error: state.error && false
            }

        case 'ADD-START-VALUE':
            if (action.value<0 || action.value >= state.maxValue) {
                return {
                    ...state,
                    error: true,
                    startValue: action.value
                }
            }
            return {
                ...state,
                isInitValue: true,
                startValue: action.value,
                error: state.error && false
            }

        case 'INC-VALUE':
            if (action.value < state.maxValue) {
                return {
                    ...state,
                    value: action.value + 1
                }
            }
            if (action.value === state.maxValue) {
                return state

            }
            return state

        case 'RESET-VALUE':
            return {
                ...state,
                value: state.startValue
            }

        case 'CHANGE-SET-VALUE':
            return {
                ...state,
                isInitValue: false,
                value: state.startValue
            }

        default:
            return state
    }
}

export const addMaxValueAC = (value: number)=> {
    return { type: 'ADD-MAX-VALUE', value} as const}

export const addStartValueAC = (value: number)=> {
    return { type: 'ADD-START-VALUE', value} as const}

export const incValueAC = (value: number)=> {
    return { type: 'INC-VALUE', value} as const}

export const resetValueAC = ()=> {
    return { type: 'RESET-VALUE'} as const}

export const changeSetValueAC = ()=> {
    return { type: 'CHANGE-SET-VALUE'} as const}

export type AddMaxValueActionType = ReturnType<typeof addMaxValueAC>
export type AddStartValueActionType = ReturnType<typeof addStartValueAC>
export type IncValueActionType = ReturnType<typeof incValueAC>
export type ResetValueActionType = ReturnType<typeof resetValueAC>
export type ChangeSetValueActionType = ReturnType<typeof changeSetValueAC>

type ActionsType =
    AddMaxValueActionType |
    AddStartValueActionType |
    IncValueActionType |
    ResetValueActionType |
    ChangeSetValueActionType
