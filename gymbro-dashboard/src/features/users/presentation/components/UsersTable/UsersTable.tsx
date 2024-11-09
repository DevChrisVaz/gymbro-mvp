import { IUser } from '@/features/users/domain/entities/user.entity';
import { container } from "@/config/dependencies";
import React, { useEffect, useState } from 'react';
import { FindUsersUseCase } from '@/features/users/application/usecases/find-users-usecase';
import DataTable from '@/core/components/flowbite/Tables/DataTable/DataTable';

export type UsersTableProps = {
}

const UsersTable: React.FC<UsersTableProps> = ({ }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [users, setUsers] = useState<IUser[]>([]);

	const findUsersUseCase = container.resolve<FindUsersUseCase>("FindUsersUseCase");

	const findUsers = async () => {
		setIsLoading(true);
		setUsers(await findUsersUseCase.run());
		setIsLoading(false);
	}

	useEffect(() => {
		findUsers();
	}, []);

	return (
		<DataTable
			columns={[
				{
					id: "firstName",
					name: "Nombre(s)"
				},
				{
					id: "lastName",
					name: "Apellidos"
				},
				{
					id: "status",
					name: "Estado"
				},
				{
					id: "userName",
					name: "Nombre de usuario"
				},
			]}
			rows={users}
			isLoading={isLoading}
			// form={<CreateUserForm />}
		/>
	);
};

export default UsersTable;
