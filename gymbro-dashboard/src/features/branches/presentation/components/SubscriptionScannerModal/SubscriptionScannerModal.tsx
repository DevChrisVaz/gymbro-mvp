import { Modal } from '@/core/components/flowbite/Modal';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserMultiFormatReader } from "@zxing/library";
import QRCodeReader from '@/core/components/QRCodeReader/QRCodeReader';
import { container } from "@/config/dependencies";
import { GetCustomerSubscriptionUseCase } from '@/features/branches/application/usecases/get-customer-subscription-usecase';
import { BranchContext } from '../../contexts/branch-context';
import { PromiseState, PromiseStateHandler } from '@/core/components/other/PromiseStateHandler';
import Loader from '@/core/components/Loader/Loader';

type SubscriptionScannerModalProps = {
    isOpen: boolean,
    close: () => void
}

const SubscriptionScannerModal: React.FC<SubscriptionScannerModalProps> = (props) => {
    const [subscriptionState, setSubscriptionState] = useState(PromiseState.INITIAL);

    const branch = useContext(BranchContext);

    const getCustomerSubscriptionUseCase = container.resolve<GetCustomerSubscriptionUseCase>("GetCustomerSubscriptionUseCase");

    const handleScan = async (customerId: string) => {
        setSubscriptionState(PromiseState.LOADING);
        try {
            const response = await getCustomerSubscriptionUseCase.run(branch.uuid, customerId);
            console.log(response);
            if (response?.uuid) {
                setSubscriptionState(PromiseState.SUCCESS);
                return;
            }
            setSubscriptionState(PromiseState.FAILED);
        } catch {
            setSubscriptionState(PromiseState.ERROR);
        }
    }

    const OnError = () => {
        return (
            <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Algo salió mal</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        );
    }

    const OnSuccess = () => {
        return (
            <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">El cliente tiene una suscripción activa</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-100 dark:focus:ring-primary-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        );
    }

    const OnFailed = () => {
        return (
            <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">No se encontró una suscripción</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        );
    }

    useEffect(() => {
        if (props.isOpen) {
            setSubscriptionState(PromiseState.INITIAL);
            setTimeout(() => {
                const reader = new BrowserMultiFormatReader();
                reader.listVideoInputDevices();
            }, 1000);
        }
    }, [props.isOpen]);

    return (
        <Modal title="Buscar suscripción" isOpen={props.isOpen} close={props.close} dismissible={false} size='xl'>
            <div className="flex items-center justify-center">
                <PromiseStateHandler
                    state={subscriptionState}
                    onInitial={
                        <div className="w-[75%] rounded-md overflow-hidden">
                            <QRCodeReader
                                onRead={handleScan}
                            />
                        </div>
                    }
                    onLoading={<Loader />}
                    onSuccess={<OnSuccess />}
                    onError={<OnError />}
                    onFailed={<OnFailed />}
                />
            </div>
        </Modal>
    );
}

export default SubscriptionScannerModal;