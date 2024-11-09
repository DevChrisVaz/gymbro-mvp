import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';

export type TextFormFieldProps = {
	label: string,
	type?: string,
	name?: string,
	onChange?: (e: ChangeEvent<any>) => void,
	prefixIcon?: ReactNode,
	value?: string | number,
	error?: string;
	info?: string;
}

const TextFormField: React.FC<TextFormFieldProps> = (props) => {
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState(props.value);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (props.onChange) {
			props.onChange(e);
		}
		setInputValue(e.target.value);
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
				<div className={"w-full flex transition-all duration-300 dark:bg-dark bg-light rounded-md overflow-hidden border-solid border ".concat(props.error ? "border-error" : "border-primary-500")}>
					{
						props.prefixIcon &&
						<div className={"w-[45px] transition-all duration-300 flex items-center justify-center ".concat(props.error ? "text-error" : "text-primary")}>
							{props.prefixIcon}
						</div>
					}
					<input
						type="text"
						className={`w-full text-sm text-dark-gray dark:text-white dark:bg-dark bg-light ${(isFocused || inputValue !== undefined && inputValue !== "") ? 'pt-5 pb-1' : 'py-2'} px-3 pr-10 focus:outline-none`}
						onFocus={onFocus}
						onBlur={onBlur}
						name={props.name}
						id={props.name}
						onChange={onInputChange}
						value={inputValue}
					/>
				</div>
				<label
					className={`absolute left-2 transition-all duration-300 cursor-text ${(isFocused || inputValue !== undefined && inputValue !== "") ? 'top-1 text-xs '.concat(props.error ? "text-error" : "text-primary") : 'top-2 text-sm text-dark-gray dark:text-white'
						} ${props.prefixIcon && 'left-[45px]'}`}
					htmlFor={props.name}
				>
					{props.label}
				</label>
			</div>
			{props.error && <p className="mt-1 text-error text-xs italic">{props.error}</p>}
			{props.info && <p className="text-slate-500 text-xs italic">* {props.info}</p>}
		</div>
	);
};

export default TextFormField;
