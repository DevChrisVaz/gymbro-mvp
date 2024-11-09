import React from 'react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
	pageName: string;
	path: string;
}

export type ChevronsBreadcrumbProps = {
	breadcrumbs: Breadcrumb[],
	currentPage: string;
}

const ChevronsBreadcrumb: React.FC<ChevronsBreadcrumbProps> = (props) => {
	return (
		<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<h1 className="text-title-md2 font-semibold text-black dark:text-white text-3xl">
				{props.currentPage}
			</h1>
			<ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
				{
					props.breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => {
						return (
							<li key={index} className="inline-flex items-center">
								<Link className="flex items-center text-sm text-gray-500 hover:text-primary focus:outline-none focus:text-primary dark:focus:text-primary" to={breadcrumb.path}>
									{breadcrumb.pageName}
								</Link>
								<svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
							</li>
						);
					})
				}
				<li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-primary" aria-current="page">
					{props.currentPage}
				</li>
			</ol>
		</div>
	);
};

export default ChevronsBreadcrumb;
