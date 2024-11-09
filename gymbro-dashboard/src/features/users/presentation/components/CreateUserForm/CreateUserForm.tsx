import { PasswordFormField } from '@/core/components/ui/PasswordFormField';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { CreateUserDTO } from '@/features/users/application/dto/create-user-dto';
import { CreateUserUseCase } from '@/features/users/application/usecases/create-user-usecase';
import createUserSchema from '@/features/users/infrastructure/data/validations/yup/gym-schema';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { container } from "@/config/dependencies";

export type CreateUserFormProps = {}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ }) => {
    const initialValues: CreateUserDTO = {
        userName: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    const navigate = useNavigate();

    const createUserUseCase = container.resolve<CreateUserUseCase>("CreateUserUseCase");

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={createUserSchema}
            onSubmit={async (values: CreateUserDTO) => {
                await createUserUseCase.run(values);
                navigate(-1);
            }}
        >
            {({
                errors,
                values,
                handleSubmit,
                handleChange
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="px-8 pt-6 mb-1 flex flex-col my-2">
                        <div className="text-white mb-5"><p className="text-lg font-semibold">Información del usuario</p></div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextFormField
                                    label='Nombre(s)'
                                    name='user.firstName'
                                    onChange={handleChange}
                                    error={errors.firstName}
                                    value={values.firstName}
                                />
                            </div>
                            <div className="md:w-1/2 px-3">
                                <TextFormField
                                    label='Apellido(s)'
                                    name="lastName"
                                    onChange={handleChange}
                                    error={errors.lastName}
                                    value={values.lastName}
                                />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <TextFormField
                                    label='Usuario'
                                    name="userName"
                                    onChange={handleChange}
                                    error={errors.userName}
                                    value={values.userName}
                                />
                            </div>
                            <div className="md:w-2/3 px-3">
                                <PasswordFormField
                                    label="Contraseña"
                                    name="password"
                                    onChange={handleChange}
                                    error={errors.password}
                                    value={values.password}
                                />
                                {/* <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p> */}
                            </div>
                        </div>
                        {/* <div className="-mx-3 md:flex mb-2">
              <div className="md:w-2/5 px-3 mb-6 md:mb-0">
                <TextFormField
                  label="Phone Number"
                  name="phone"
                // onChange={handleChange}
                />
              </div>
              <div className="md:w-2/5 px-3">
                <TextFormField
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/5 px-3">
                <CalendarFormField
                  label=""
                  name="birthdate"
                // onChange={handleChange}
                />
              </div>
            </div> */}
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default CreateUserForm