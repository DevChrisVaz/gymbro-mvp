import React, { FC, cloneElement, useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { ActionButtonProps, IconActionsProps, NavLinkProps, NavLinksType, NavSize, NavbarItemProps, NavbarProps } from './Navbar.d';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { SearchBar } from '../ui/SearchBar';
import { validateChild } from '@/core/utils/validateChild';

const NavLink: React.FC<NavLinkProps> = (props) => {
	const { pathname } = useParams();

	const isActive = (): string => {
		return pathname === props.to ? 'text-primary' : '';
	};

	return (
		<Link to={props.to} className={`${isActive()} hover:text-primary`}>{props.children}</Link>
	);
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
	return props.item.dropdown && props.item.dropdown?.length > 0 ?
		<>
			<p className="cursor-default">{props.item.label}</p>
			<ul className="absolute left-0 hidden pt-2 space-y-2 bg-gray-800 group-hover:block">
				{
					props.item.dropdown?.map((item, key) =>
						<li key={key} className="relative group">
							<NavbarItem item={item} />
						</li>
					)
				}
			</ul>
		</>
		:
		<NavLink to={props.item.url!}>{props.item.label}</NavLink>
}

export const IconActions: React.FC<IconActionsProps> = () => {
	return (
		<div className="gap-1">

		</div>
	);
}

export const ActionButton: React.FC<ActionButtonProps> = (props) => {
	return (
		<Button onClick={props.action} className="bg-gradient text-white">{props.children}</Button>
	)
}

export const NavLinks: React.FC<NavLinksType> = (props) => {
	return (
		<div ref={props.ref} className="dark:bg-dark dark:text-white duration-500 md:static absolute bg-light md:min-h-fit min-h-screen left-0 top-[-100%] md:w-auto w-full flex md:flex-row flex-col md:items-center gap-10 px-5">
			<ul className="flex md:flex-row flex-col md:items-center md:gap-10 gap-8 pt-5 md:pt-0">
				{
					props.items.map((item, key) => (
						<li key={key} className="relative group">
							<NavbarItem item={item} />
						</li>
					))
				}
			</ul>
		</div>
	);
}

const Navbar: React.FC<NavbarProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const menuRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const allowedChildren: FC<any>[] = [
		NavLinks,
		IconActions
	]

	const childrenWithProps = React.Children.map(props.children, (child) => {
		if (validateChild(child, allowedChildren)) {
			return cloneElement(child, { ref: menuRef });
		}
	});

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		switch (props.size) {
			case NavSize.small:
				menuRef.current!.classList.toggle("top-[48px]")
				break;
			case NavSize.medium:
				menuRef.current!.classList.toggle("top-[56px]")
				break;
			case NavSize.large:
				menuRef.current!.classList.toggle("top-[72px]")
				break;
			default:
				menuRef.current!.classList.toggle("top-[56px]")
				break;
		}

	};

	const setNavbarSize = () => {
		let definedSize: string;

		switch (props.size) {
			case NavSize.small:
				definedSize = "py-1 md:px-4 lg:px-8 xl:px-12 px-1";
				break;
			case NavSize.medium:
				definedSize = "py-2 md:px-6 lg:px-10 xl:px-14 px-3";
				break;
			case NavSize.large:
				definedSize = "py-3 md:px-8 lg:px-12 xl:px-16 px-5";
				break;
			default:
				definedSize = "py-2 md:px-6 lg:px-10 xl:px-14 px-3";
				break;
		}

		return definedSize;
	}

	return (
		<nav className={(props.className ?? "").concat(`bg-light dark:bg-dark flex justify-between items-center ${setNavbarSize()} shadow-lg`)}>
			<div>
				{
					props.logo !== null &&
					<Link to="/">
						{props.logo}
					</Link>
				}
				{
					props.searchBar &&
					<SearchBar />
				}
			</div>
			<div className="flex">
				{childrenWithProps}
				<div className="flex items-center gap-6">
					<Button onClick={() => navigate("/login")} className="bg-gradient text-white">Ingresa</Button>
					{
						isOpen ?
							<FiX onClick={toggleMenu} className="text-primary text-3xl cursor-pointer md:hidden" />
							:
							<FiMenu onClick={toggleMenu} className="text-primary text-3xl cursor-pointer md:hidden" />
					}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
