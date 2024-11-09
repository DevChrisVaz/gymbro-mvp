import React from 'react'
import { CreateUserForm } from '../../components/CreateUserForm';

export type CreateUserPageProps = {}

const CreateUserPage: React.FC<CreateUserPageProps> = ({ }) => {
    return (
        <>
            <div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <CreateUserForm />
            </div>
        </>
    );
}

export default CreateUserPage;