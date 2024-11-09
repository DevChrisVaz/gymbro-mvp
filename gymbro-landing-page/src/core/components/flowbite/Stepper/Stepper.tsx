import React, { ReactElement } from 'react'

export type StepperProps = {
    steps: ReactElement[],
    currentStep: number;
}

const Stepper: React.FC<StepperProps> = (props) => {
    return (
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            {
                props.steps.map((step: ReactElement, index: number) => (
                    // <li key={index} className={`flex md:w-full items-center 
                    //     ${index <= props.currentStep && "text-primary"}
                    //     ${index === 0 ? "sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-300"
                    //         : index !== props.steps.length - 1 && "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                    //     }`}>
                    //     {step}
                    // </li>
                    index === 0 ?
                        <li key={index} className={`flex md:w-full items-center text-primary sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                            {step}
                        </li>
                        :
                        index >= 1 && index < props.steps.length - 1 ?
                            <li key={index} className={`flex md:w-full ${index <= props.currentStep && "text-primary"} items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                                {step}
                            </li>
                            :
                            <li key={index} className={`flex items-center" ${index <= props.currentStep && "text-primary"}`}>
                                {step}
                            </li>
                ))
            }
        </ol>

    )
}

export default Stepper;