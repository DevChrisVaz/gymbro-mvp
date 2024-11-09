import React, { useEffect } from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarItemType } from '../Sidebar/Sidebar.d';
import { AiFillHome, AiFillInfoCircle, AiFillMail, AiFillShop } from 'react-icons/ai';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { IoBarbell } from 'react-icons/io5';
import { Outlet, useNavigate } from "react-router-dom";
import { AuthLocalDataSourceImpl } from '../../../features/auth/data/data-sources/auth-local-data-source';
import { SearchBar } from '../ui/SearchBar';
import { AccountDropdown } from '../preline/Dropdown/AccountDropdown';

export type LayoutProps = {
}

const Layout: React.FC<LayoutProps> = () => {

	const sidebarLinks: SidebarItemType[] = [
		{
			label: 'Inicio',
			url: '/',
			icon: <AiFillHome className="text-primary text-[24px]" />,
		},
		{
			label: 'Mi Gimnasio',
			// url: '/',
			icon: <IoBarbell className="text-primary text-[24px]" />,
			isOpen: false,
			items: [
				{
					label: 'Información',
					url: '/info',
					icon: <AiFillInfoCircle className="text-primary text-[24px]" />,
				},
				{
					label: 'Contacto',
					url: '/contact',
					icon: <AiFillMail className="text-primary text-[24px]" />,
				},
			],
		},
		{
			label: 'Sucursales',
			url: '/branches',
			icon: <AiFillShop className="text-primary text-[24px]" />,
		},
		{
			label: 'Usuarios',
			url: '/users',
			icon: <BsFillPersonVcardFill className="text-primary text-[24px]" />,
		},
		// {
		// 	label: 'Planes',
		// 	url: '/plans',
		// 	icon: <AiFillDollarCircle className="text-primary text-[24px]" />,
		// },
		// {
		// 	label: 'Clientes',
		// 	url: '/customers',
		// 	icon: <AiOutlineTeam className="text-primary text-[24px]" />,
		// },
		// {
		// 	label: 'Suscripciones',
		// 	url: '/suscriptions',
		// 	icon: <MdCardMembership className="text-primary text-[24px]" />,
		// }
	];

	const navigate = useNavigate();

	useEffect(() => {
		const authLocalDataSource = new AuthLocalDataSourceImpl();
		if (!authLocalDataSource.getToken()) {
			navigate("/login");
		}
	}, []);

	return (
		<div className="w-screen h-screen flex overflow-hidden">
			<Sidebar links={sidebarLinks} />
			<div className="w-full h-full overflow-auto">
				<nav className="bg-light dark:bg-dark flex justify-between items-center py-2 md:px-6 lg:px-10 xl:px-6 px-3 shadow-md">
					<SearchBar />
					<AccountDropdown />
				</nav>
				<section className="text-dark-green p-4 m-5 mt-0">
					<Outlet />
				</section>
			</div>
		</div>
	);
};

export default Layout;