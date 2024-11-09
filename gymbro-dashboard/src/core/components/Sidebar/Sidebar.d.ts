import { ReactNode } from "react";

export type SidebarProps = {
    className?: string;
    links: SidebarItemType[]
}

export type SidebarLinkProps = {
    isSidebarOpen: boolean;
    item: SidebarItemType;
}

export type SidebarItemType = {
    isOpen?: boolean;
    label: string;
    url?: string;
    icon?: ReactNode;
    items?: SidebarItemType[];
}