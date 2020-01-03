import React, { createContext, useReducer } from 'react';
import errorReducer from './reducers/errorReducer';
import PropTypes from 'prop-types';

export const ErrorContext = createContext();

const ErrorContextProvider = ({ children }) => (
	<ErrorContext.Provider value={useReducer(errorReducer, { error: null })}>
		{children}
	</ErrorContext.Provider>
);

ErrorContextProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default ErrorContextProvider;
