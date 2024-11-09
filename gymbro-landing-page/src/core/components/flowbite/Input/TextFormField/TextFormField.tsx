import React, { ChangeEvent, ReactNode } from 'react';

export type TextFromFieldProps = {
    label: string,
    type?: string,
    name?: string,
    onChange?: (e: ChangeEvent<any>) => void,
    prefixIcon?: ReactNode,
    value?: string,
    error?: string;
}

const TextFormField: React.FC<TextFromFieldProps> = (props) => {
    return (
        <div>
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <input 
                type="text" 
                id="default-input"
                name={props.name}
                value={props.value}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dark-gray-soft dark:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-700 dark:focus:border-primary-500" 
                onChange={props.onChange}
            />
            {props.error && <p className="mt-1 text-error text-xs italic">{props.error}</p>}
        </div>
    );
}

export default TextFormField;