import componentReducer, { initialState as componentInitialState } from './componentReducer';
import anotherExampleReducer, { initialState as anotherExampleInitialState } from './anotherExampleReducer';

const mainReducer = ({ component, anotherExample }, action) => {
    return {
        component: componentReducer(component, action),
        anotherExample: anotherExampleReducer(anotherExample, action)
    };
};

export const mainInitialState = {
    component: componentInitialState,
    anotherExample: anotherExampleInitialState
};

export default mainReducer;