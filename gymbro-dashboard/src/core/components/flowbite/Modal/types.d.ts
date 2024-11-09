import { ReactNode } from "react"

export type ModalProps = {
    title?: ReactNode;
    children?: ReactNode;
    isOpen: boolean;
    close: () => void;
    dismissible?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
}