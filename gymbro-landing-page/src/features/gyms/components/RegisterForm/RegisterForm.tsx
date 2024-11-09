"use client";

import { Stepper, useStepper } from '@/core/components/flowbite/Stepper';
import React, { cloneElement } from 'react';
import UserForm from './UserForm';
import GYMForm from './GYMForm';
import BranchForm from './BranchForm';
import { Formik } from "formik";
import { Button } from '@/core/components/flowbite/UIElements';
import AddressForm from './AddressForm';
import Image from 'next/image';
import { RegisterGYMDto } from '../../application/dto/RegisterGYM.dto';
import registerGYMSchema from '../../infrastructure/validations/yup/gym-schema';
import { AxiosApiRestClient } from '@/core/frameworks/data/datasources/rest/axios/axios-implementation';
import { GYMRemoteDataSourceImpl } from '../../infrastructure/data/data-sources/gym-remote-data-source';
import { GYMRepositoryImpl } from '../../infrastructure/data/repositories/gym.repository';
import { RegisterGYMUseCase } from '../../application/usecases/register-gym-usecase';
import { Loader } from '@/core/components/Loader';

export type RegisterFormProps = {}

const RegisterForm: React.FC<RegisterFormProps> = (props) => {

    const initialValues: RegisterGYMDto = {
        email: '',
        name: '',
        description: '',
        user: {
            firstName: '',
            lastName: '',
            userName: '',
            password: ''
        },
        branch: {
            address: {
                building: "",
                city: "",
                country: "",
                neighborhood: "",
                state: "",
                street: "",
                zip: ""
            },
            email: "",
            name: "",
            phone: ""
        }
    }

    const axiosApiRestClient = new AxiosApiRestClient();
    const gymRemoteDataSource = new GYMRemoteDataSourceImpl(axiosApiRestClient);
    const gymRepository = new GYMRepositoryImpl(gymRemoteDataSource);
    const registerGYMUserCase = new RegisterGYMUseCase(gymRepository);

    const submitForm = async (values: RegisterGYMDto) => {
        await registerGYMUserCase.run(values);
    }

    const { currentStepIndex, step, next, prev, stepsNum } = useStepper([
        <UserForm key={1} />,
        <GYMForm key={2} />,
        <BranchForm key={3} />,
        <AddressForm key={4} />
    ]);

    return (
        <div className="w-full flex flex-col items-center justify-center pt-10">
            <div className="mx-10 max-w-screen-sm text-center mb-10 md:mb-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Registrate</h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Úne tu gimnasio a nuestra comunidad y ayuda a otros gimnastas a descubrirlo y administralo desde <span className='inline-block translate-y-3'><Image src={"/assets/img/logo/horizontal-logo.svg"} alt="GYMBRO" width={120} height={100} /></span> .</p>
            </div>
            <div className='lg:w-[800px] pb-10'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerGYMSchema}
                    onSubmit={submitForm}
                >
                    {({
                        errors,
                        values,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <>
                            <Stepper
                                steps={[
                                    <span key={1} className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        {
                                            errors.user === undefined || Object.keys(errors.user).length === 0 &&
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                        }
                                        <span className="me-2">1</span>
                                        Usuario
                                    </span>,
                                    <span key={2} className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        <span className="me-2">2</span>
                                        GYM
                                    </span>,
                                    <span key={3} className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        <span className="me-2">3</span>
                                        Sucursal
                                    </span>,
                                    <div key={4}>
                                        <span className="me-2">4</span>
                                        Dirección
                                    </div>
                                ]}
                                currentStep={currentStepIndex}
                            />

                            <form className="mt-5" onSubmit={handleSubmit}>
                                {cloneElement(step, {
                                    values,
                                    errors,
                                    handleChange,
                                })}
                                <div className="w-full flex justify-between">
                                    {
                                        currentStepIndex > 0 ?
                                            <Button
                                                type='button'
                                                className='bg-gradient text-white'
                                                onClick={prev}
                                            >
                                                Anterior
                                            </Button>
                                            :
                                            <div></div>
                                    }
                                    {
                                        currentStepIndex < (stepsNum - 1) ?
                                            <Button
                                                type='button'
                                                className='bg-gradient text-white'
                                                onClick={next}
                                            >
                                                Siguiente
                                            </Button>
                                            :
                                            <Button
                                                type='submit'
                                                className='bg-gradient text-white'
                                                onClick={() => { }}
                                            >
                                                {
                                                    isSubmitting ?
                                                        <Loader />
                                                        :
                                                        "Registrarse"
                                                }
                                            </Button>
                                    }
                                </div>
                            </form>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default RegisterForm;