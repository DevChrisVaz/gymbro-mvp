import React from 'react';
import CreateEquipmentForm from '../../components/CreateEquipmentForm/CreateEquipmentForm';

type CreateEquipmentProps = {}

const CreateEquipment: React.FC<CreateEquipmentProps> = () => {
    return (
        <>
            <div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <CreateEquipmentForm />
            </div>
        </>
    )
}

export default CreateEquipment;