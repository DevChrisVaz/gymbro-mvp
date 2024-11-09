import PasswordFormField from '@/core/components/flowbite/Input/PasswordFormField/PasswordFormField';
import TextFormField from '@/core/components/flowbite/Input/TextFormField/TextFormField';
import React, { ChangeEvent } from 'react';

type UserFormProps = {
  values?: any,
  errors?: any;
  handleChange?: (e: ChangeEvent<any>) => void,
}

const UserForm: React.FC<UserFormProps> = (props) => {
  return (
    (
      <div className="px-8 pt-6 mb-1 flex flex-col my-2">
        <div className="text-white mb-5"><p className="text-lg font-semibold">Información del solicitante</p></div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <TextFormField
              label='Nombre(s)'
              name='user.firstName'
              onChange={props.handleChange}
              error={props.errors.user?.firstName}
              value={props.values.user?.firstName}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <TextFormField
              label='Apellido(s)'
              name="user.lastName"
              onChange={props.handleChange}
              error={props.errors.user?.lastName}
              value={props.values.user?.lastName}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <TextFormField
              label='Usuario'
              name="user.userName"
              onChange={props.handleChange}
              error={props.errors.user?.userName}
              value={props.values.user?.userName}
            />
          </div>
          <div className="md:w-2/3 px-3">
            <PasswordFormField
              label="Contraseña"
              name="user.password"
              onChange={props.handleChange}
              error={props.errors.user?.password}
              value={props.values.user?.password}
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
    )
  );
}

export default UserForm;