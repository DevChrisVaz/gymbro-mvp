import { Sidebar } from '@/core/components/Sidebar';
import { AiFillDollarCircle, AiFillHome, AiFillInfoCircle, AiFillMail, AiFillShop } from 'react-icons/ai';
// import { BsFillPersonVcardFill } from 'react-icons/bs';
import { SidebarItemType } from '@/core/components/Sidebar/Sidebar.d';
import React from 'react';
import { IBranch } from '@/features/branches/domain/entities/branch.entity';
import { useBranchContext } from '../../contexts/branch-context';
import { IoBarbell } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';

export type BranchSidebarProps = {
}

const BranchSidebar: React.FC<BranchSidebarProps> = ({ }) => {

	const branch: IBranch = useBranchContext();

	const sidebarLinks: SidebarItemType[] = [
		{
			label: 'Dashboard',
			url: '/',
			icon: <MdDashboard className="text-primary text-[24px]" />
		},
		{
			label: 'Inicio',
			url: '/branches/' + branch.uuid,
			icon: <AiFillHome className="text-primary text-[24px]" />,
		},
		{
			label: branch.name,
			// url: '/',
			icon: <AiFillShop className="text-primary text-[24px]" />,
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
			label: 'Equipamiento',
			url: '/branches/' + branch.uuid + '/equipment',
			icon: <IoBarbell className="text-primary text-[24px]" />
		},
		{
			label: 'Planes',
			url: '/branches/' + branch.uuid + '/plans',
			icon: <AiFillDollarCircle className="text-primary text-[24px]" />,
		}
		// {
		// 	label: 'Usuarios',
		// 	url: '/branches/' + branch.uuid + '/users',
		// 	icon: <BsFillPersonVcardFill className="text-primary text-[24px]" />,
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

export default BranchSidebar;
