const initialState = {
    name: "Dandi Saputra"
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: "Dandi"
        }
    }
    return state
}

export default globalReducer;