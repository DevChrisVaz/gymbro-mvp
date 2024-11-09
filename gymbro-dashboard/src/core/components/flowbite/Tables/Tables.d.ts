import { ReactNode } from "react";

export interface Header {
    id: string | number,
    name: string,
    [propName: string]: any | undefined
}

export type TableProps<T> = {
    columns: Header[];
    rows: T[];
    isLoading?: boolean;
}

export type DataTablesProps = TableProps & {
    form?: ReactNode,
    onDelete?: (registry: any) => void;
}

export type SimpleTableProps = TableProps & {
    linked?: boolean;
}

export type TableRowsProps = {
    rows: T[];
}