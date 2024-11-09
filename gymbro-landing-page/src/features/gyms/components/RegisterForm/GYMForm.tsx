import AreaFormField from '@/core/components/flowbite/Input/AreaFormField/AreaFormField';
import TextFormField from '@/core/components/flowbite/Input/TextFormField/TextFormField';
import React, { ChangeEvent } from 'react';

type GYMFormProps = {
  values?: any,
  errors?: any;
  handleChange?: (e: ChangeEvent<any>) => void,
}

const GYMForm: React.FC<GYMFormProps> = (props) => {
  return (
    <div className="px-8 pt-2 pb-8 mb-2 flex flex-col my-2">
      <div className="text-white mb-5"><p className="text-lg font-semibold">Información del gimnasio</p></div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <TextFormField
            label='GYM Name'
            name='name'
            onChange={props.handleChange}
            error={props.errors.name}
            value={props.values.name}
          />
          {/* <p className="text-error text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <TextFormField
            label='Email'
            name='email'
            onChange={props.handleChange}
            error={props.errors.email}
            value={props.values.email}
          />
          {/* <p className="text-error text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          <AreaFormField
            label='Description'
            name="description"
            onChange={props.handleChange}
            value={props.values.description}
            error={props.errors.description}
          />
        </div>
      </div>
    </div>
  );
}

export default GYMForm;