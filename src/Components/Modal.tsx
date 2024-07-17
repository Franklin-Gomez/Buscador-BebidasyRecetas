import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../store/useAppStore';
import { drinkdetailType } from '../Types';

export default function Modal() {

    const modal = useAppStore((state) => state.modal);
    const closeModal = useAppStore((state) => state.closeModal)
    const recipe = useAppStore((state) => state.recipe)

    const renderIngredients = () => { 

        const ingredients : JSX.Element[] = []

        for( let i = 1 ; i <= 6 ; i++ ) { 

            const Ingredientes = recipe[`strIngredient${i}` as keyof drinkdetailType]
            const Cantidad = recipe[`strMeasure${i}`  as keyof drinkdetailType ]
            
            if( Ingredientes && Cantidad) { 
                ingredients.push( 
                    <li key={i} className=' text-lg font-normal text-black'> {Ingredientes} - {Cantidad}</li>
                )
            }

        }

        return ingredients

    }
 
    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={ closeModal }>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel 
                                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" 
                                >
                                    <Dialog.Title 
                                        as="h3" 
                                        className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                                    >
                                        {recipe.strDrink}
                                    </Dialog.Title>

                                    <Dialog.Title 
                                        as="h3" 
                                        className="text-gray-900 text-2xl font-extrabold my-5"
                                    >
                                        Ingredientes y Cantidades

                                        {renderIngredients()}
                                        
                                    </Dialog.Title>

                                    <Dialog.Title 
                                        as="h3" 
                                        className="text-gray-900 text-2xl font-extrabold my-5"
                                    >
                                        Instruciones
                                        
                                        <p 
                                            className=' text-black text-lg font-normal'
                                        > {recipe.strInstructions} </p>
                                        
                                    </Dialog.Title>

                                    <div className=' flex gap-4'>
                                        <button
                                            className="p-2 w-full bg-gray-500 uppercase font-bold hover:bg-gray-700 text-white"
                                            onClick={ closeModal }
                                        >
                                            Cerrar Ventana
                                        </button>

                                        <button
                                            className="p-2 w-full bg-orange-500 uppercase font-bold hover:bg-orange-700 text-white"
                                        >
                                            Agregar a Favoritos
                                        </button>
                                    </div>


                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}