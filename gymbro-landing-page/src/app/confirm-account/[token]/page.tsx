"use client"

import axios from 'axios';
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React from 'react'

function ConfirmationPage() {

  const searchParams = useParams();
  const router = useRouter();
  const { token } = searchParams;

  const activateAccount = async () => {
    try {
      await axios.patch("https://gymbro-services.onrender.com/api/customers/verify-account/" + token)
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="bg-white dark:bg-dark">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-40 lg:px-20}">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bienvenido a gymbro! </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Gracias por usar nuestro sistema, ahora que has confirmado tu cuenta puedes disfrutar de todos los beneficios que tenemos para ti.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a onClick={activateAccount} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Activar cuenta
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ConfirmationPage