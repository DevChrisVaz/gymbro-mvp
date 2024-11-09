import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

type PasswordFormFieldProps = {
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
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <div className="relative w-full">
                <input
                    type={inputType}
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-primary-500 focus:border-blue-500 dark:bg-dark-gray-soft dark:border-s-primary-500  dark:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-700"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onInputChange}
                    name={props.name}
                    value={props.value}
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-primary-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary dark:focus:ring-primary-700">
                    {showPassword ? <BsEyeSlashFill className="text-white" /> : <BsEyeFill className="text-dark-grey dark:text-white" />}
                </button>
            </div>
            {props.error && <p className="mt-1 text-error text-xs italic">{props.error}</p>}
        </div>
    );
}

export default PasswordFormField;