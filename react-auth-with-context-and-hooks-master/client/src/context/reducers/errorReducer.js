export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
	case 'SET_ERROR':
		return {
			...state,
			error: payload
		};
	case 'CLEAR_ERROR':
		return {
			...state,
			error: null
		};
	default:
		return state;
	}
};
