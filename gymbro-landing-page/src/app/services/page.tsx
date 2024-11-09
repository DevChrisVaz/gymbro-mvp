import React from 'react'
import Image from 'next/image'

function ServicesPage() {
    return (
        <section className='bg-white dark:bg-gray-900'>
            <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
                <div>
                    <Image className='mt-4 w-full lg:mt-10 rounded-lg' src="/assets/img/services/FrameWeb1.png" alt="Web" width={1000} height={1000} />
                </div>
                <div className='mt-4 md:mt-0'>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Administrador Web</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        La página web administrativa proporciona a los gimnasios asociados una interfaz intuitiva y completa para gestionar su información. Con un panel de control fácil de usar, les permite manejar horarios, servicios, suscripciones y promociones. Ofrece análisis detallados y reportes para evaluar el rendimiento, así como capacidades de comunicación directa con los usuarios. Permite la personalización de perfiles para mantener la información actualizada y atractiva
                    </p>
                </div>
            </div>
            <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
                <div className='mt-4 md:mt-0'>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Applicacion Móvil</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        La aplicación móvil ofrece a los usuarios clientes una experiencia fluida. Con un registro sencillo y una interfaz amigable, facilita la búsqueda de gimnasios por ubicación, servicios y horarios gracias a filtros inteligentes. Permite suscripciones, gestión de planes, reservas de clases y servicios, notificaciones sobre ofertas, cambios en horarios y eventos. Además, brinda seguimiento de actividades físicas, progreso y metas personales para mejorar su experiencia fitness.
                    </p>
                </div>
                <div>
                    <Image className='mt-4 w-full lg:mt-10 rounded-lg' src="/assets/img/services/FrameMovil1.png" alt="Web" width={1000} height={1000} />
                </div>
            </div>
        </section>
    )
}

export default ServicesPage