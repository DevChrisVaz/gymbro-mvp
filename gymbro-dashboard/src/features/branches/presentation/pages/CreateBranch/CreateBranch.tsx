import React from 'react';
import { CreateBranchForm } from '../../components/CreateBranchForm';

export type CreateBranchProps = {
}

const CreateBranch: React.FC<CreateBranchProps> = ({ }) => {
	return (
		<>
			<div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				{/* <div className="mb-6 text-xl font-semibold text-black dark:text-white flex justify-between"> */}
					<CreateBranchForm />
				{/* </div> */}
			</div>
		</>
	);
};

export default CreateBranch;
