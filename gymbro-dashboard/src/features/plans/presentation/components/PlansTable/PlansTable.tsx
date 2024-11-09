import { FindBranchPlansUseCase } from '@/features/plans/application/usecases/find-branch-plans-usecase';
import { IPlan } from '@/features/plans/domain/entities/plan.entity';
import React, { useEffect, useState } from 'react';
import { container } from "@/config/dependencies";
import DataTable from '@/core/components/flowbite/Tables/DataTable/DataTable';
import { DeletePlanUseCase } from '@/features/plans/application/usecases/delete-plan-usecase';
import { UpdatePlanForm } from '../UpdatePlanForm';

export type PlansTableProps = {
	branchId: string;
}

const PlansTable: React.FC<PlansTableProps> = (props) => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [plans, setPlans] = useState<IPlan[]>([]);

	const findPlansUseCase = container.resolve<FindBranchPlansUseCase>("FindBranchPlansUseCase");
	const deletePlanUseCase = container.resolve<DeletePlanUseCase>("DeletePlanUseCase");

	const findPlans = async () => {
		setIsLoading(true);
		setPlans(await findPlansUseCase.run(props.branchId));
		setIsLoading(false);
	}

	const deletePlan = async (plan?: IPlan) => {
		if (plan) {
			await deletePlanUseCase.run(plan.uuid);
			await findPlansUseCase.run(props.branchId);
		}
	}

	useEffect(() => {
		findPlans();
	}, [props.branchId]);

	return (
		<DataTable
			columns={[
				{
					id: "title",
					name: "Plan"
				},
				{
					id: "description",
					name: "Descripción"
				},
				{
					id: "duration",
					name: "Duración"
				},
				{
					id: "price",
					name: "Precio"
				},
				{
					id: "status",
					name: "Estado"
				},
			]}
			rows={plans}
			isLoading={isLoading}
			form={<UpdatePlanForm />}
			onDelete={deletePlan}
		/>
	);
};

export default PlansTable;
