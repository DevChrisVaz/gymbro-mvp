import { ReactNode } from "react"

export type ButtonProps = {
	children: ReactNode;
	className?: string;
	type?: "reset" | "button" | "submit" | undefined;
	onClick: () => void;
}