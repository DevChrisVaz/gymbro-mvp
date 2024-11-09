import { TextFormField } from '@/core/components/flowbite/Input';
import React, { ChangeEvent } from 'react';

type GYMFormProps = {
  values?: any,
  errors?: any;
  handleChange?: (e: ChangeEvent<any>) => void,
}

const BranchForm: React.FC<GYMFormProps> = (props) => {
  return (
    <div className="px-8 pt-6 mb-1 flex flex-col my-2">
      <div className="text-white mb-5"><p className="text-lg font-semibold">Información de la sucursal</p></div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          <TextFormField
            label='Nombre de Sucursal'
            name='branch.name'
            onChange={props.handleChange}
            error={props.errors.branch?.name}
            value={props.values.branch?.name}
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3">
          <TextFormField
            label='Teléfono'
            name="branch.phone"
            onChange={props.handleChange}
            value={props.values.branch?.phone}
            error={props.errors.branch?.phone}
          />
        </div>
        <div className="md:w-2/3 px-3">
          <TextFormField
            label='Correo'
            name="branch.email"
            onChange={props.handleChange}
            value={props.values.branch?.email}
            error={props.errors.branch?.email}
          />
        </div>
      </div>
    </div>
  );
}

export default BranchForm;