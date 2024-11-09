import { LogoutUseCase } from '@/features/auth/application/usecases/logout-usecase';
import { ILoggedUser } from '@/features/auth/domain/entities/logged-user.entity';
import useImage from '@/hooks/use-image';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { container } from "@/config/dependencies";
import { GetLoggedUserUseCase } from '@/features/auth/application/usecases/get-logged-user-usecase';

export type AccountDropdownProps = {
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ }) => {
	const [loggedUser, setLoggedUser] = useState<ILoggedUser>({
		id: "",
		name: "",
		role: "",
		profilePicture: ""
	});

	const navigate = useNavigate();
	const image = useImage();

	const getLoggedUserUseCase = container.resolve<GetLoggedUserUseCase>("GetLoggedUserUseCase");
	const logoutUseCase = container.resolve<LogoutUseCase>("LogoutUseCase");

	const logout = () => {
		if (logoutUseCase.run()) navigate("/login");
	}

	useEffect(() => {
		try {
			setLoggedUser(getLoggedUserUseCase.run());
		} catch {
			navigate("/login")
		}
	}, []);

	return (
		<div className="hs-dropdown relative inline-flex">
			<button id="hs-dropdown-with-dividers" type="button" className="hs-dropdown-toggle px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:pointer-events-none text-primary dark:hover:bg-dark-gray-soft">
				<div
					className="flex-shrink-0 group flex items-center"
				>
					<div className="flex items-center mr-2">
						<div className="inline-block mr-3 text-end">
							<h3 className="font-semibold text-gray-800 dark:text-white">{loggedUser.name}</h3>
							<p className="text-[11px] font-medium text-primary">{loggedUser.role}</p>
						</div>
						{
							image(loggedUser.profilePicture).exists ?
								<img className="flex-shrink-0 h-[3rem] w-[3rem] rounded-full" src={loggedUser.profilePicture} alt="Profile" />
								:
								<span className="inline-block h-[2.875rem] w-[2.875rem] dark:bg-dark-gray-soft rounded-full overflow-hidden">
									<svg className="h-full w-full text-dark-gray" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="0.62854" y="0.359985" width="15" height="15" rx="7.5" />
										<path d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z" fill="currentColor" />
										<path d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z" fill="currentColor" />
									</svg>
								</span>
						}
					</div>
				</div>
				<svg className="hs-dropdown-open:rotate-180 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
			</button>
			<div className="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-dark dark:border dark:border-primary-500 dark:divide-primary-500 z-50" aria-labelledby="hs-dropdown-with-dividers">
				<div className="py-2 first:pt-0 last:pb-0">
					<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-gray-soft dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
						</svg>
						Newsletter
					</a>
					<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-gray-soft dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
						Purchases
					</a>
					<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-gray-soft dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
						Downloads
					</a>
					<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-gray-soft dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
						Team Account
					</a>
				</div>
				<div className="py-2 first:pt-0 last:pb-0">
					<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-gray-soft dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
						</svg>

						Perfil
					</a>
					<button
						className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-gray-soft dark:hover:text-gray-300 dark:focus:bg-gray-700"
						onClick={logout}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
						</svg>
						Cerrar sesión
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccountDropdown;
