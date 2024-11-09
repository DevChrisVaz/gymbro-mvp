import { Button } from '@/core/components/ui/Button';
import { SearchBar } from '@/core/components/ui/SearchBar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BranchesTable } from '../../components/BranchesTable';
import { SimpleBreadcrumb } from '@/core/components/flowbite/breadcrumbs';

export type BranchesProps = {
}

const Branches: React.FC<BranchesProps> = ({ }) => {

	const navigate = useNavigate();

	return (
		<>
			<SimpleBreadcrumb 
				breadcrumbs={[
					{
						pageName: "Dashboard",
						path: "/"
					}
				]} 
				currentPage='Sucursales' 
			/>
			<div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="mb-6 text-xl font-semibold text-black dark:text-white flex justify-between">
					<SearchBar />
					<Button onClick={() => navigate("create-branch")} className="bg-gradient text-white rounded-full">Nuevo +</Button>
				</div>
				<BranchesTable />
			</div>
		</>
	);
};

export default Branches;
