import { Sidebar } from '@/core/components/Sidebar';
import { SidebarItemType } from '@/core/components/Sidebar/Sidebar.d';
import React from 'react';
import { AiFillHome, AiFillInfoCircle, AiFillMail, AiFillShop } from 'react-icons/ai';
import { useGYMContext } from '../../contexts/gym-context';
import { IGYM } from '@/features/gyms/domain/entities/gym.entity';
import { IoBarbell } from 'react-icons/io5';
import { BsFillPersonVcardFill } from 'react-icons/bs';

export type GYMSidebarProps = {
}

const GYMSidebar: React.FC<GYMSidebarProps> = ({ }) => {

	const gym: IGYM = useGYMContext()

	const sidebarLinks: SidebarItemType[] = [
		{
			label: 'Inicio',
			url: '/',
			icon: <AiFillHome className="text-primary text-[24px]" />,
		},
		{
			label: gym.name,
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

	return <Sidebar links={sidebarLinks} />;
};

export default GYMSidebar;
