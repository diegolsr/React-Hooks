export const initialState = {
    test: false,
    count: 0
};

const componentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SOMETHING':
            return {
                ...state,
                test: true
            };
        case 'ADD':
            return {
                ...state,
                count: state.count+1
            };
        default:
            return state;
    }
};

export default componentReducer;