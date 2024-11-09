import { FindBranchesUseCase } from '@/features/branches/application/usecases/find-branches-usecase';
import { IBranch } from '@/features/branches/domain/entities/branch.entity';
import React, { useEffect, useState } from 'react';
import { container } from "@/config/dependencies";
import DataTable from '@/core/components/flowbite/Tables/DataTable/DataTable';
import { DeleteBranchUseCase } from '@/features/branches/application/usecases/delete-branch-usecase';
import UpdateBranchForm from '../UpdateBranchForm/UpdateBranchForm';

export type BranchesTableProps = {
}

const BranchesTable: React.FC<BranchesTableProps> = ({ }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [branches, setBranches] = useState<IBranch[]>([]);

	const findBranchesUseCase = container.resolve<FindBranchesUseCase>("FindBranchesUseCase");
	const deleteBranchUseCase = container.resolve<DeleteBranchUseCase>("DeleteBranchUseCase");

	const findBranches = async () => {
		setIsLoading(true);
		setBranches(await findBranchesUseCase.run());
		setIsLoading(false);
	}

	const deleteBranch = async (branch?: IBranch) => {
		if (branch) {
			await deleteBranchUseCase.run(branch.uuid);
		}
	}

	useEffect(() => {
		findBranches();
	}, []);

	return (
		<DataTable
			columns={[
				{
					id: "name",
					name: "Sucursal"
				},
				{
					id: "phone",
					name: "Teléfono"
				},
				{
					id: "email",
					name: "Correo"
				}
			]}
			linked
			rows={branches}
			isLoading={isLoading}
			form={<UpdateBranchForm />}
			onDelete={deleteBranch}
		/>
	);
};

export default BranchesTable;
