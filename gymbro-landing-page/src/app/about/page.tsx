import React from 'react'
import Image from 'next/image'
function AboutPage() {
    return (
        <section className="bg-white dark:bg-dark">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Acerca de Gymbro</h2>
                    <p className="mb-4">
                        Gymbro nace de la pasión por un estilo de vida saludable y activo. En un mundo cada vez más ocupado, queríamos simplificar la búsqueda de gimnasios de calidad y personalizados para los amantes del fitness. Nuestro objetivo es crear un ecosistema en el que los usuarios puedan descubrir opciones diversas y los gimnasios puedan conectarse con una comunidad comprometida con su bienestar.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image className='w-full rounded-lg' src="/assets/img/about/AboutImage.avif" alt="About" width={1000} height={1000} />
                    <Image className='mt-4 w-full lg:mt-10 rounded-lg' src="/assets/img/about/AboutImage1.webp" alt="About" width={1000} height={1000} />
                </div>
            </div>

            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image className='w-full rounded-lg' src="/assets/img/about/AboutImage2.jpg" alt="About" width={1000} height={1000} />
                    <Image className='mt-4 w-full lg:mt-10 rounded-lg' src="/assets/img/about/AboutImage3.jpg" alt="About" width={1000} height={1000} />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Historia de la Empresa</h2>
                    <p className="mb-4">
                        La idea surgió de la experiencia personal de los fundadores, quienes enfrentaron desafíos para encontrar gimnasios que se adaptaran a sus necesidades específicas. Decidieron crear una solución que facilitara este proceso para todos.
                    </p>
                    <p className="mb-4">
                        Desde nuestro lanzamiento, hemos experimentado un crecimiento constante, expandiendo nuestra red de gimnasios asociados y mejorando continuamente nuestra plataforma para brindar una experiencia aún mejor a nuestros usuarios.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutPage 