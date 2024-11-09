import { ReactElement, ReactNode, RefObject } from "react"
import { NavLinks } from "./Navbar";

export enum NavSize {
    small,
    medium,
    large
}

export type NavbarProps = {
    className?: string;
    size?: Sizes;
    logo?: ReactNode;
    items: LinkType[];
    searchBar?: boolean;
    children: ReactElement<NavLinksType>[] | ReactElement<NavLinksType>
}

export type NavLinksType = {
    className?: string;
    items: LinkType[];
    ref?: RefObject<HTMLDivElement>;
}

export type NavLinkProps = {
    children: ReactNode;
    to: string;
}

export type NavbarItemProps = {
    item: LinkType;
}

export type LinkType = {
    label: string;
    url?: string;
    dropdown?: LinkType[];
}

export type IconActionsProps = {
    
}

export type ActionButtonProps = {
    children: ReactNode;
    action: () => void;
}