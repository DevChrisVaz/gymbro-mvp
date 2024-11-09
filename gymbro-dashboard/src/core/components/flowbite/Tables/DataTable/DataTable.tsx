import React, { cloneElement, useState } from 'react'
import { DataTablesProps, Header as TableHeader } from '../Tables';
import { useNavigate } from 'react-router-dom';
import Loader from '@/core/components/Loader/Loader';
import numeral from 'numeral';
import { Modal, useModal } from '../../Modal';
import { Button } from '@/core/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { PromiseState, PromiseStateHandler } from '@/core/components/other/PromiseStateHandler';

const DataTable: React.FC<DataTablesProps> = (props) => {
  const [deletingState, setDeletingState] = useState<PromiseState>(PromiseState.INITIAL);

  const navigate = useNavigate();
  const { openModal, closeModal, isOpen } = useModal();
  const { openModal: openDeleteModal, closeModal: closeDeleteModal, isOpen: isDeleteOpen } = useModal();
  const [registry, setRegistry] = useState<any>(null);

  const handleDelete = async () => {
    setDeletingState(PromiseState.LOADING);
    try {
      await props.onDelete(registry);
      setDeletingState(PromiseState.SUCCESS);
    } catch {
      setDeletingState(PromiseState.ERROR);
    }
  }

  return (
    <>
      {
        props.form &&
        <Modal isOpen={isOpen} close={closeModal} size='4xl'>
          {cloneElement(props.form, {
            registry
          })}
        </Modal>
      }
      <Modal isOpen={isDeleteOpen} close={() => { closeDeleteModal(); setDeletingState(PromiseState.INITIAL) }} size='md'>
        <div className="p-4 md:p-5 text-center">
          <PromiseStateHandler
            state={deletingState}
            onInitial={
              <>
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Estás seguro de que deseas eliminar este registro?</h3>
              </>
            }
            onSuccess={
              <>
                <CheckCircle2 className='mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200' />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Registro eliminado con éxito</h3>
              </>
            }
          />
          <PromiseStateHandler
            state={deletingState}
            onInitial={
              <div className="w-full flex justify-between">
                <Button className="bg-error text-white" onClick={handleDelete}>Sí, estoy seguro</Button>
                <Button className="bg-neutral-800 text-white" onClick={closeDeleteModal}>No, cancelar</Button>
              </div>
            }
            onLoading={<Loader />}
            onSuccess={<Button className="bg-gradient text-white" onClick={() => { closeDeleteModal(); setDeletingState(PromiseState.INITIAL) }}>Confirmar</Button>}
          />
        </div>
      </Modal>
      <div className="overflow-x-auto pb-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b dark:border-dark-gray-soft">
            <tr>
              {/* <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th> */}
              {
                props.columns.length > 0 && props.columns.map((column: TableHeader) => {
                  return (
                    <th
                      key={column.id}
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >{column.name}</th>
                  )
                })
              }
              {
                (props.onDelete && props.form) &&
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Action
                </th>
              }
            </tr>
          </thead>
          <tbody>
            {
              props.isLoading ?
                <tr>
                  <td
                    colSpan={props.columns.length + 1}
                    className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-gray-200"
                  ><Loader /></td>
                </tr>
                :
                props.rows.length > 0 && props.columns.length > 0 ? props.rows.map((row: any, index: number) => {
                  return (
                    <tr className="border-b dark:border-dark-gray-soft dark:hover:bg-dark-gray-soft" style={{ cursor: props.linked ? "Pointer" : "" }} key={index} onClick={() => props.linked && navigate(row.uuid)}>
                      {/* <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td> */}
                      {
                        props.columns.map((column: TableHeader) => {
                          return (
                            <td
                              key={column.id}
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                            >{
                                column.price ? numeral(row[column.id]).format("$0,0.00") :
                                  column.concat && column.concat.fields.length > 0 ? column.concat.fields.map((field: string) => row[field] + column.concat.separator) :
                                    row[column.id]
                              }</td>
                          )
                        })
                      }
                      {
                        (props.onDelete && props.form) &&
                        <td className="flex items-center px-6 py-4">
                          {props.form && <a type="button" onClick={(e) => { e.stopPropagation(), setRegistry(row); openModal() }} className="font-medium text-primary hover:underline cursor-pointer">Edit</a>}
                          {props.onDelete && <a type="button" onClick={(e) => { e.stopPropagation(), setRegistry(row); openDeleteModal() }} className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 cursor-pointer">Remove</a>}
                        </td>
                      }
                    </tr>
                  )
                }) :
                  <tr>
                    <td
                      colSpan={props.columns.length + 1}
                      className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-gray-200"
                    >No se encontraron registros</td>
                  </tr>
            }
          </tbody>
        </table>

      </div>
    </>

  )
}

export default DataTable;