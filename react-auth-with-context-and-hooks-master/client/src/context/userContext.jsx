import React, { createContext, useReducer } from 'react';
import userReducer from './reducers/userReducer';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => (
	<UserContext.Provider value={useReducer(userReducer, { user: null })}>
		{children}
	</UserContext.Provider>
);

UserContextProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default UserContextProvider;
