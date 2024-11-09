export type Breadcrumb = {
    pageName: string;
    path: string;
}

export type BreadcrumbProps = {
    breadcrumbs: Breadcrumb[],
    currentPage: string;
}