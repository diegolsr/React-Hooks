import React from 'react';
import PropTypes from 'prop-types';

export const FieldWrapper = ({
	alignContent,
	alignItems,
	children,
	className = '',
	direction,
	flex,
	justify,
	style,
	wrap,
	...restProps
}) => {
	let parentStyle = {};

	if (flex) {
		if (alignContent) parentStyle.alignContent = alignContent;
		if (alignItems) parentStyle.alignItems = alignItems;
		if (direction) parentStyle.flexDirection = direction;
		if (justify) parentStyle.justifyContent = justify;
		if (wrap) parentStyle.justifyWrap = wrap;
	}

	if (parentStyle === {}) parentStyle = null;

	return flex ? (
		<div className={className + 'is-flex'} style={parentStyle}>
			{children.map((child, i) => {
				const { basis, shrink, grow, order, align } = child.props;

				let combinedStyles = style ? { ...style } : {};

				if (align) combinedStyles.alignSelf = align;
				if (basis) combinedStyles.flexBasis = basis;
				if (grow) combinedStyles.flexGrow = grow;
				if (order) combinedStyles.order = order;
				if (shrink) combinedStyles.flexShrink = shrink;

				if (combinedStyles === {}) combinedStyles = null;

				return (
					<div
						className={'field'}
						key={i}
						style={combinedStyles}
						{...restProps}
					>
						{' '}
						{child}
					</div>
				);
			})}
		</div>
	) : (
		children.map((child, i) => {
			return (
				<div
					className={className ? className + 'field' : 'field'}
					key={i}
					style={style}
					{...restProps}
				>
					{child}
				</div>
			);
		})
	);
};

FieldWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.element,
		PropTypes.node
	]).isRequired,
	alignContent: PropTypes.string,
	alignItems: PropTypes.string,
	className: PropTypes.string,
	direction: PropTypes.string,
	flex: PropTypes.bool,
	justify: PropTypes.string,
	style: PropTypes.object,
	wrap: PropTypes.bool
};

export const Button = ({
	children,
	className = '',
	color = 'info',
	handleClick,
	icon,
	rounded,
	size = 'normal',
	text,
	type = 'button',
	...restProps
}) => (
	<div className="contol">
		{' '}
		<button
			className={
				className + rounded
					? `button is-${color}
    					is-${size}
    					is-rounded`
					: `button is-${color}
    					is-${size}
   					 `
			}
			type={type}
			onClick={handleClick ? event => handleClick(event) : null}
			{...restProps}
		>
			{icon && <Icon iconKey={icon} />}
			{children && children}
			{text && text}
		</button>{' '}
	</div>
);

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.element,
		PropTypes.node
	]),
	className: PropTypes.string,
	color: PropTypes.string,
	handleClick: PropTypes.func,
	icon: PropTypes.string,
	rounded: PropTypes.bool,
	size: PropTypes.string,
	style: PropTypes.object,
	text: PropTypes.string,
	type: PropTypes.string
};

export const Form = ({ children, errors, handleSubmit, ...restProps }) => (
	<form onSubmit={event => handleSubmit(event)} {...restProps}>
		{errors ? (
			<div>
				{' '}
				{errors.map((error, i) => (
					<p key={i}>{error}</p>
				))}
			</div>
		) : (
			<div />
		)}
		{children}
	</form>
);

Form.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.element,
		PropTypes.node
	]).isRequired,
	errors: PropTypes.array,
	handleSubmit: PropTypes.func.isRequired
};

export const Icon = ({
	className = '',
	iconKey,
	position = 'left',
	size = 'small',
	...restProps
}) => (
	<span className={className + `icon is-${position} is-${size}`}>
		<i className={`fas fa-${iconKey}`} {...restProps} />
	</span>
);

Icon.propTypes = {
	className: PropTypes.string,
	iconKey: PropTypes.string,
	position: PropTypes.string,
	size: PropTypes.string
};
export const Input = ({
	className = '',
	color = 'info',
	errorMsg,
	handleChange,
	icon,
	invalidicon,
	name,
	placeholder,
	required = false,
	rounded,
	size = 'medium',
	successMsg,
	type,
	valid = null,
	validicon,
	value,
	...restProps
}) => {
	const isRounded = rounded ? 'is-rounded' : '';
	const combinedClasses =
		`input is-${color} is-${size}` + className + isRounded;
	const placeholderTxt = placeholder
		? placeholder
		: name === 'email'
			? 'Email'
			: name === 'password'
				? 'Password'
				: name === 'verifyPassword'
					? 'Confirm Password'
					: name === 'userName'
						? 'Username'
						: null;
	const validityIcon = valid
		? validicon
			? validicon
			: 'check'
		: invalidicon
			? invalidicon
			: 'exclamation-triangle';
	const validityStyle =
		valid !== null ? (valid ? { color: 'gold' } : { color: 'red' }) : null;
	const msgClass =
		errorMsg || successMsg ? (errorMsg ? 'is-success' : 'is-danger') : '';

	return (
		<div>
			<div className="control has-icons-left has-icons-right">
				<input
					required={required}
					type={type}
					name={name}
					value={value}
					className={combinedClasses}
					placeholder={placeholderTxt}
					onChange={event => {
						handleChange(event);
					}}
					{...restProps}
				/>
				{icon && <Icon iconkey={icon} position="left" />}
				{valid !== null && (
					<Icon
						iconKey={validityIcon}
						style={validityStyle}
						size={size}
						position="right"
					/>
				)}
			</div>
			{(errorMsg || successMsg) && (
				<p className={'help' + msgClass}>
					{errorMsg ? errorMsg : successMsg}
				</p>
			)}
		</div>
	);
};

Input.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	rounded: PropTypes.bool,
	style: PropTypes.object,
	handleChange: PropTypes.func.isRequired,
	errorHandler: PropTypes.object,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
	validicon: PropTypes.string,
	invalidicon: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	className: PropTypes.string,
	errorMsg: PropTypes.string,
	successMsg: PropTypes.string,
	valid: PropTypes.bool
};
