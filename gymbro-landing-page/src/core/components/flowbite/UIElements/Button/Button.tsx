import React, { ReactNode } from 'react';

export type ButtonProps = {
    children: ReactNode;
    className?: string;
    type?: "reset" | "button" | "submit" | undefined;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button type={props.type ?? "button"} className={"px-5 py-2 rounded-full font-bold ".concat(props.className ?? "")} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;