import React, { ChangeEvent, ReactNode } from 'react';

export type AreaFormFieldProps = {
    label: string,
    name?: string,
    onChange?: (e: ChangeEvent<any>) => void,
    value?: string,
    prefixIcon?: ReactNode,
    error?: string;
}

const AreaFormField: React.FC<AreaFormFieldProps> = (props) => {
    return (
        <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-gray-soft dark:border-primary-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none"
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
            {props.error && <p className="mt-1 text-error text-xs italic">{props.error}</p>}
        </div>
    );
}

export default AreaFormField;