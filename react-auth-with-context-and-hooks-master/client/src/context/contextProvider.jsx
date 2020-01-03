import React from 'react';
import UserProvider from './userContext';
import ErrorProvider from './errorContext';
import PropTypes from 'prop-types';

const ContextProvider = ({ children }) => (
	<ErrorProvider>
		<UserProvider>{children}</UserProvider>
	</ErrorProvider>
);

ContextProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default ContextProvider;
