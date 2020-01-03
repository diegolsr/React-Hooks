export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
	case 'SET_USER':
		return {
			...state,
			user: payload
		};
	case 'CLEAR_USER':
		return {
			...state,
			user: null
		};
	default:
		return state;
	}
};
