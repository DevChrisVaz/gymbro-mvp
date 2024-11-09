import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchBarProps } from './SearchBar.d';

const SearchBar: React.FC<SearchBarProps> = ({ }) => {
	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Buscar..."
				className="w-64 pl-8 pr-4 py-1 border rounded-full bg-light dark:bg-dark text-black dark:text-white focus:outline-none focus:ring ring-primary-500 border-primary-500"
			// value={searchTerm}
			// onChange={handleSearchInputChange}
			/>
			<div className="absolute inset-y-0 left-2.5 flex items-center">
				<FaSearch className="text-primary h-4 w-4" />
			</div>
		</div>
	);
};

export default SearchBar;
