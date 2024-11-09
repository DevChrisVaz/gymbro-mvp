import Loader from '@/core/components/Loader/Loader';
import { AreaFormField } from '@/core/components/ui/AreaFormField';
import { Button } from '@/core/components/ui/Button';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { Formik } from 'formik';
import React from 'react';
import { container } from "@/config/dependencies";
import { IPlan } from '@/features/plans/domain/entities/plan.entity';
import { UpdatePlanUseCase } from '@/features/plans/application/usecases/update-plan-usecase';
import updatePlanSchema from '@/features/plans/infrastructure/validations/yup/update-plan-schema';

export type UpdatePlanFormProps = {
    registry?: IPlan
}

const UpdatePlanForm: React.FC<UpdatePlanFormProps> = (props) => {
    const initialValues: IPlan = {
        title: '',
        description: '',
        duration: 0,
        price: 0,
        branch: "",
        status: "",
        uuid: ""
    }

    const updatePlanUseCase = container.resolve<UpdatePlanUseCase>("UpdatePlanUseCase");

    return (
        <Formik
            initialValues={props.registry ?? initialValues}
            validationSchema={updatePlanSchema}
            onSubmit={async (values) => {
                values.duration = parseInt(values.duration.toString());
                values.price = parseInt(values.price.toString());
                await updatePlanUseCase.run(values);
            }}
        >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit} className='p-4 pt-2'>
                    <div className="mb-1 flex flex-col my-2">
                        <div className="text-white mb-5"><p className="text-lg font-semibold">Información del plan</p></div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-3/5 px-3 mb-6 md:mb-0">
                                <TextFormField
                                    label='Nombre del plan'
                                    name='title'
                                    onChange={handleChange}
                                    value={values.title}
                                    error={errors.title}
                                />
                            </div>
                            <div className="md:w-1/5 px-3">
                                <TextFormField
                                    prefixIcon={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    }
                                    label='Duración'
                                    name="duration"
                                    onChange={handleChange}
                                    error={errors.duration}
                                    value={values.duration}
                                    info='La duración es en días'
                                />
                            </div>
                            <div className="md:w-1/5 px-3 mb-6 md:mb-0">
                                <TextFormField
                                    prefixIcon={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    }
                                    label='Precio'
                                    name='price'
                                    onChange={handleChange}
                                    error={errors.price}
                                    value={values.price}
                                />
                                {/* <p className="text-error text-xs italic">Please fill out this field.</p> */}
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-full px-3">
                                <AreaFormField
                                    label='Descripción'
                                    name="description"
                                    onChange={handleChange}
                                    value={values.description}
                                    error={errors.description}
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
};

export default UpdatePlanForm;