import { AccountDropdown } from '@/core/components/preline/Dropdown/AccountDropdown';
import { IGYM } from '@/features/gyms/domain/entities/gym.entity';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { container } from "@/config/dependencies";
import { FindUserGymUseCase } from '@/features/gyms/application/usecases/find-user-gym-usecase';
import { GYMSidebar } from '../GYMSidebar';
import { GYMContextProvider } from '../../contexts/gym-context';

export type GYMLayoutProps = {
}

const GYMLayout: React.FC<GYMLayoutProps> = ({ }) => {
	const [gym, setGYM] = useState<IGYM>({
		name: '',
		description: "",
		status: "",
		uuid: ""
	});

	const findUserGYMUseCase = container.resolve<FindUserGymUseCase>("FindUserGymUseCase");

	const findUserGYM = async () => {
		setGYM(await findUserGYMUseCase.run());
	}

	useEffect(() => {
		findUserGYM();
	}, []);

	return (
		<GYMContextProvider value={gym}>
			<div className="relative w-screen h-screen flex overflow-hidden">
				<GYMSidebar />
				<div className="w-full h-full overflow-auto">
					<nav className="bg-light dark:bg-dark flex justify-between items-center py-2 md:px-6 lg:px-10 xl:px-6 px-3 shadow-md">
						<img src="/img/logo/horizontal-logo.svg" alt="GYMBRO" width={150} />
						<AccountDropdown />
					</nav>
					<section className="text-dark-green p-4 m-5 mt-0">
						<Outlet />
					</section>
				</div>
			</div>
		</GYMContextProvider>
	); gym
};

export default GYMLayout;
