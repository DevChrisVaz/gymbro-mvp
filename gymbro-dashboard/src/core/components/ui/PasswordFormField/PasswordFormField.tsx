import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

export type PasswordFormFieldProps = {
	label: string;
	name: string;
	value?: string;
	onChange?: (e: ChangeEvent<any>) => void;
	prefixIcon?: ReactNode;
	error?: string;
}

const PasswordFormField: React.FC<PasswordFormFieldProps> = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState('password');
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState(props.value);

	const onInputChange = (e: any) => {
		if (props.onChange) {
			props.onChange(e);
		}
		setInputValue(e.target.value);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
		setInputType(showPassword ? 'password' : 'text');
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	useEffect(() => {
		setInputValue(props.value);
	}, [props.value]);

	return (
		<div className="mb-4">
			<div className="relative">
				<div className="w-full flex dark:bg-dark bg-light rounded-md overflow-hidden border border-solid border-primary-500">
					{
						props.prefixIcon &&
						<div className="w-[45px] flex items-center justify-center text-primary">
							{props.prefixIcon}
						</div>
					}
					<input
						type={inputType}
						className={`w-full text-sm text-dark-gray dark:text-white dark:bg-dark bg-light ${isFocused || inputValue ? 'pt-5 pb-1' : 'py-2'} px-3 pr-10 focus:outline-none`}
						onFocus={onFocus}
						onBlur={onBlur}
						name={props.name}
						id={props.name}
						onChange={onInputChange}
						value={inputValue}
					/>
				</div>
				<label
					className={`absolute left-2 transition-all duration-300 cursor-text ${isFocused || inputValue ? 'top-1 text-xs text-primary' : 'top-2 text-sm text-dark-gray dark:text-white'
						} ${props.prefixIcon && 'left-[45px]'}`}
					htmlFor={props.name}
				>
					{props.label}
				</label>
				<button
					type="button"
					onClick={togglePasswordVisibility}
					className="absolute inset-y-0 right-2 px-2 py-1 text-gray-700 rounded-md focus:outline-none"
				>
					{showPassword ? <BsEyeSlashFill className="text-white" /> : <BsEyeFill className="text-dark-grey dark:text-primary" />}
				</button>
			</div>
			{props.error && <p className="mt-1 text-error text-xs italic">{props.error}</p>}
		</div>
	);
};

export default PasswordFormField;

