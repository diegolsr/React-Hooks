import React from 'react';
import ComponentWithState from './componentWithState';
import DumbComponent from './dumbComponent';
import { StateProvider } from '../context/stateExample';
import mainReducer, { mainInitialState } from '../reducers';

const Container = () => {
    return (
        <StateProvider initialState={mainInitialState} reducer={mainReducer}>
            <ComponentWithState />
            <DumbComponent />
        </StateProvider>
    );
}

export default Container;