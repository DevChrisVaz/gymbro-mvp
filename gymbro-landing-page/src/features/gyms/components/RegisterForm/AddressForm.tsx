import { TextFormField } from '@/core/components/flowbite/Input';
import React, { ChangeEvent } from 'react';

type AddressFormProps = {
    values?: any,
    errors?: any;
    handleChange?: (e: ChangeEvent<any>) => void
}

const AddressForm: React.FC<AddressFormProps> = (props) => {
    return (
        <div className="px-8 pt-2 mb-2 flex flex-col my-2">
            <div className="text-white mb-5"><p className="text-lg font-semibold">Dirección</p></div>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-2/5 px-3 mb-6 md:mb-0">
                    <TextFormField
                        label='Calle'
                        name='branch.address.street'
                        onChange={props.handleChange}
                        value={props.values.branch?.address.street}
                        error={props.errors.branch?.address.street}
                    />
                </div>
                <div className="md:w-1/5 px-3 mb-6 md:mb-0">
                    <TextFormField
                        label='Número'
                        name="branch.address.building"
                        onChange={props.handleChange}
                        value={props.values.branch?.address.building}
                        error={props.errors.branch?.address.building}
                    />
                </div>
                <div className="md:w-2/5 px-3 mb-6 md:mb-0">
                    <TextFormField
                        label='Código postal'
                        name="branch.address.zip"
                        onChange={props.handleChange}
                        value={props.values.branch?.address.zip}
                        error={props.errors.branch?.address.zip}
                    />
                </div>
                <div className="md:w-2/5 px-3 mb-6 md:mb-0">
                    <TextFormField
                        label='Colonia'
                        name="branch.address.neighborhood"
                        onChange={props.handleChange}
                        value={props.values.branch?.address.neighborhood}
                        error={props.errors.branch?.address.neighborhood}
                    />
                </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                    <TextFormField
                        label='Ciudad'
                        name="branch.address.city"
                        onChange={props.handleChange}
                        value={props.values.branch?.address.city}
                        error={props.errors.branch?.address.city}
                    />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                    <TextFormField
                        label='Estado'
                        name="branch.address.state"
                        onChange={props.handleChange}
                        value={props.values.branch?.address.state}
                        error={props.errors.branch?.address.state}
                    />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                    <TextFormField
                        label='País'
                        name="branch.address.country"
                        onChange={props.handleChange}
                        value={props.values.branch?.address.country}
                        error={props.errors.branch?.address.country}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddressForm;