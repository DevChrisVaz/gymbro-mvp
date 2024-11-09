import { AreaFormField } from '@/core/components/ui/AreaFormField';
import SimpleImageInput from '@/core/components/ui/SimpleImageInput/SimpleImageInput';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { CreateEquipmentDto } from '@/features/equipment/application/dto/create-equipment.dto';
import { CreateEquipmentUseCase } from '@/features/equipment/application/usecases/create-equipment-usecase';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { container } from "@/config/dependencies";
import { Button } from '@/core/components/ui/Button';
import { Loader } from 'lucide-react';
import createEquipmentSchema from '@/features/equipment/infrastructure/data/validations/create-equipment-schema';
import { useNavigate, useParams } from 'react-router-dom';

export type CreateEquipmentFormProps = {}

const CreateEquipmentForm: React.FC<CreateEquipmentFormProps> = () => {
    const [image, setImage] = useState<File>();
    const [imageError, setImageError] = useState<string | null>();

    const navigate = useNavigate();
    const { id } = useParams();
    const createEquipmentUseCase = container.resolve<CreateEquipmentUseCase>("CreateEquipmentUseCase");

    const submitForm = async (values: CreateEquipmentDto) => {
        const formData = new FormData();
        if (!image) {
            setImageError("La imagen es obligatoria");
            return;
        }
        formData.append("file", image);
        values.branch = id;
        values.qty = parseInt(values.qty!.toString());
        await createEquipmentUseCase.run(values, formData);
        navigate(-1);
    }

    return (
        <Formik
            initialValues={new CreateEquipmentDto()}
            validationSchema={createEquipmentSchema}
            onSubmit={submitForm}
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
                        <div className="text-white mb-5"><p className="text-lg font-semibold">Información del equipo</p></div>
                        <div className="md:flex mb-6">
                            <div className="w-1/3 px-3 mb-6 md:mb-0">
                                <SimpleImageInput
                                    updatePictureCb={(file: File) => {
                                        setImage(file);
                                        setImageError(null);
                                    }}
                                />
                                {imageError && <p className="mt-1 text-error text-xs italic">{imageError}</p>}
                            </div>
                            <div className="md:flex flex-col md:w-2/3 mb-6">
                                <div className='flex'>
                                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <TextFormField
                                            label='Nombre'
                                            name='name'
                                            onChange={handleChange}
                                            value={values.name}
                                            error={errors.name}
                                        />
                                    </div>
                                    <div className="md:w-1/2 px-3">
                                        <TextFormField
                                            label='Cantidad'
                                            name="qty"
                                            onChange={handleChange}
                                            value={values.qty}
                                            error={errors.qty}
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3">
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
                    </div>
                    <div className="w-full pb-3 text-end">
                        <Button type='submit' onClick={() => { }} className="bg-gradient text-white">
                            {
                                isSubmitting ?
                                    <Loader /> :
                                    "Crear equipamiento"
                            }
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default CreateEquipmentForm;