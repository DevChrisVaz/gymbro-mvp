import { Formik } from 'formik';
import React from 'react'
import { container } from "@/config/dependencies";
import { IBranch } from '@/features/branches/domain/entities/branch.entity';
import { UpdateBranchUseCase } from '@/features/branches/application/usecases/update-branch-usecase';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { Button } from '@/core/components/ui/Button';
import Loader from '@/core/components/Loader/Loader';
import updateBranchSchema from '@/features/branches/infrastructure/validations/yup/update-branch-schema';

export type UpdateBranchFormProps = {
    registry?: IBranch
}

const UpdateBranchForm: React.FC<UpdateBranchFormProps> = (props) => {
    const initialValues: IBranch = {
        name: '',
        uuid: '',
        phone: '',
        email: ''
    };

    const updateBranchUseCase = container.resolve<UpdateBranchUseCase>("UpdateBranchUseCase");

    return (
        <Formik
            initialValues={props.registry ?? initialValues}
            validationSchema={updateBranchSchema}
            onSubmit={async (values) => {
                await updateBranchUseCase.run(values);
            }}
        >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="px-8 pt-6 mb-1 flex flex-col my-2">
                        <div className="text-white mb-5"><p className="text-lg font-semibold">Información de la sucursal</p></div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <TextFormField
                                    label='Nombre de Sucursal'
                                    name='name'
                                    onChange={handleChange}
                                    error={errors.name}
                                    value={values.name}
                                />
                            </div>
                            <div className="md:w-1/3 px-3">
                                <TextFormField
                                    label='Teléfono'
                                    name="phone"
                                    onChange={handleChange}
                                    value={values.phone}
                                    error={errors.phone}
                                />
                            </div>
                            <div className="md:w-1/3 px-3">
                                <TextFormField
                                    label='Correo'
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    error={errors.email}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full pb-3 text-end">
                        <Button type='submit' onClick={() => { }} className="bg-gradient text-white">
                            {
                                isSubmitting ?
                                    <Loader /> :
                                    "Actualizar"
                            }
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default UpdateBranchForm