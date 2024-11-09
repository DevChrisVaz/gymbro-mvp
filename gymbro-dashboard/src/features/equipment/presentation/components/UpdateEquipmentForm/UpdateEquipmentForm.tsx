import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { container } from "@/config/dependencies";
import { Formik } from 'formik';
import SimpleImageInput from '@/core/components/ui/SimpleImageInput/SimpleImageInput';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { AreaFormField } from '@/core/components/ui/AreaFormField';
import { Button } from '@/core/components/ui/Button';
import { Loader } from 'lucide-react';
import { UpdateEquipmentUseCase } from '@/features/equipment/application/usecases/update-equipment-usecase';
import { IEquipment } from '@/features/equipment/domain/entities/equipment.entity';
import updateEquipmentSchema from '@/features/equipment/infrastructure/data/validations/update-equipment-schema';
import { MEDIA_URL } from '@/config/constants/urls';

export type UpdateEquipmentFormProps = {
    registry?: IEquipment
}

const UpdateEquipmentForm: React.FC<UpdateEquipmentFormProps> = (props) => {
    const [image, setImage] = useState<File>();
    const [imageError, setImageError] = useState<string | null>();

    const navigate = useNavigate();
    const updateEquipmentUseCase = container.resolve<UpdateEquipmentUseCase>("UpdateEquipmentUseCase");

    const initialValues: IEquipment = {
        uuid: "",
        name: "",
        description: "",
        image: "",
        qty: 0,
        branch: "",
        status: ""
    }

    const submitForm = async (values: IEquipment) => {
        const formData = new FormData();
        if (!image) {
            setImageError("La imagen es obligatoria");
            return;
        }
        formData.append("file", image);
        values.qty = parseInt(values.qty!.toString());
        await updateEquipmentUseCase.run(values, formData);
        navigate(-1);
    }

    useEffect(() => {
        (async () => {
            if (props.registry) {
                let response = await fetch(MEDIA_URL + props.registry.image);
                let data = await response.blob();
                setImage(new File([data], props.registry.image.split("/").pop()!, { type: 'image/jpeg' }))
            }
        })();
    }, [props.registry]);

    return (
        <Formik
            initialValues={props.registry ?? initialValues}
            validationSchema={updateEquipmentSchema}
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
                                    currentImage={image}
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

export default UpdateEquipmentForm;