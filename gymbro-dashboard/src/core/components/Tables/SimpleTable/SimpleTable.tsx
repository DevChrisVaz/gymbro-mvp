import React from 'react';
import { Header } from '../Tables';

export type SimpleTableProps<T> = {
	columns: Header[];
	rows: T[];
	footbar?: boolean;
	linked?: boolean;
	// actions?: Actions;
	tableId?: string;
}

const SimpleTable: React.FC<SimpleTableProps<any>> = (props) => {
	return (
		<table className="rounded-t-xl table-auto">
			<thead className=" bg-gray-2 dark:bg-meta-4 bg-dark-gray-soft">
				<tr>
					{
						props.columns.length > 0 && props.columns.map((column, index) => {
							return (
								<th key={index} className="xl:p-5">
									<h5 className="text-sm font-medium uppercase xsm:text-base">
										{column.name ?? ""}
									</h5>
								</th>
							)
						})
					}
				</tr>
			</thead>
			{/* <Suspense fallback={<Loader />}>
				<PlansTable />
			</Suspense> */}
		</table>
	);
};

export default SimpleTable;
