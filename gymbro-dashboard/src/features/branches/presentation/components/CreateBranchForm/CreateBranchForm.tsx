import Loader from '@/core/components/Loader/Loader';
import { Button } from '@/core/components/ui/Button';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { CreateBranchDto } from '@/features/branches/application/dto/create-branch.dto';
import { CreateBranchUseCase } from '@/features/branches/application/usecases/create-branch-usecase';
import createBranchSchema from '@/features/branches/infrastructure/validations/yup/create-branch-schema';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { container } from "@/config/dependencies";

export type CreateBranchFormProps = {
}

const CreateBranchForm: React.FC<CreateBranchFormProps> = ({ }) => {

	const initialValues: CreateBranchDto = {
		name: '',
		address: {
			street: '',
			building: '',
			zip: '',
			neighborhood: '',
			city: '',
			state: '',
			country: ''
		},
		phone: '',
		email: ''
	};

	const navigate = useNavigate();

	const createBranchUseCase = container.resolve<CreateBranchUseCase>("CreateBranchUseCase");

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={createBranchSchema}
			onSubmit={async (values) => {
				await createBranchUseCase.run(values);
				navigate("/branches");
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
					<div className="px-8 pt-2 mb-2 flex flex-col my-2">
						<div className="text-white mb-5"><p className="text-lg font-semibold">Dirección</p></div>
						<div className="-mx-3 md:flex mb-6">
							<div className="md:w-1/5 px-3 mb-6 md:mb-0">
								<TextFormField
									label='Calle'
									name='address.street'
									onChange={handleChange}
									value={values.address.street}
									error={errors.address?.street}
								/>
							</div>
							<div className="md:w-1/5 px-3 mb-6 md:mb-0">
								<TextFormField
									label='Número'
									name="address.building"
									onChange={handleChange}
									value={values.address.building}
									error={errors.address?.building}
								/>
							</div>
							<div className="md:w-1/5 px-3 mb-6 md:mb-0">
								<TextFormField
									label='Código postal'
									name="address.zip"
									onChange={handleChange}
									value={values.address.zip}
									error={errors.address?.zip}
								/>
							</div>
							<div className="md:w-2/5 px-3 mb-6 md:mb-0">
								<TextFormField
									label='Colonia'
									name="address.neighborhood"
									onChange={handleChange}
									value={values.address.neighborhood}
									error={errors.address?.neighborhood}
								/>
							</div>
						</div>
						<div className="-mx-3 md:flex mb-6">
							<div className="md:w-1/3 px-3 mb-6 md:mb-0">
								<TextFormField
									label='Ciudad'
									name="address.city"
									onChange={handleChange}
									value={values.address.city}
									error={errors.address?.city}
								/>
							</div>
							<div className="md:w-1/3 px-3 mb-6 md:mb-0">
								<TextFormField
									label='Estado'
									name="address.state"
									onChange={handleChange}
									value={values.address.state}
									error={errors.address?.state}
								/>
							</div>
							<div className="md:w-1/3 px-3 mb-6 md:mb-0">
								<TextFormField
									label='País'
									name="address.country"
									onChange={handleChange}
									value={values.address.country}
									error={errors.address?.country}
								/>
							</div>
						</div>
					</div>
					<div className="w-full pb-3 text-end">
						<Button type='submit' onClick={() => { }} className="bg-gradient text-white">
							{
								isSubmitting ?
									<Loader /> :
									"Crear sucursal"
							}
						</Button>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default CreateBranchForm;
