/* eslint-disable no-unused-expressions */
import { useState, useCallback, memo, useEffect, Fragment } from 'react';
import { Board } from './Board';
import { Box } from './Box';
import update from 'immutability-helper';
import Soal from '../../data/Soal'
import Iqra from '../../data/DataHuruf';
import { Dialog, Transition } from '@headlessui/react'

let counterPage = 0;

export const Container = memo(function Container() {

    const [dustbins, setDustbins] = useState([]);
    const [boxes, setBoxes] = useState([]);
    const [droppedBoxNames, setDroppedBoxNames] = useState([])

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1;
    }

    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        setDustbins(update(dustbins, {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedBoxNames, dustbins]);

    useEffect(() => {
        setBoardData()
        setBoxData()
    }, [])

    const setBoardData = (idSoal = counterPage) => {
        let arr = [];
        Soal[idSoal].data.forEach(element => {
            arr.push({ accepts: Iqra.map(iqra => iqra.nama_huruf), lastDroppedItem: null })
        })
        setDustbins(arr)
    }

    const setBoxData = () => {
        let arr = []
        Iqra.forEach(element => {
            arr.push({
                name: element.nama_huruf,
                image: element.gambar_huruf,
                type: element.nama_huruf
            })
        })
        setBoxes(arr)
    }

    return (
        <div className='bg-custom-primary min-h-screen px-4 md:px-8 xl:px-28 pt-4'>
            <h1 className='text-white'>1. Lengkapi Kotak dibawah dengan huruf hijaiyah : {Soal[counterPage].data.map(soal => soal.name).join(', ')} </h1>
            <div className='w-full flex justify-end my-4'>
                <button className='bg-custom-green-primary text-white px-2 py-1 rounded-md shadow-custom-shadow-green' onClick={openModal}>
                    Bank Data
                </button>
            </div>
            <div as='board_container' className='flex w-full justify-evenly'>
                {console.log(dustbins)}
                {dustbins.map(({ accepts, lastDroppedItem }, index) => (<Board accept={accepts} lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(index, item)} key={index} soal={Soal[0].data[index]} Iqra={Iqra} />))}
            </div>
            <div className='w-full flex mt-4'>
                <button className='bg-custom-secondary text-white px-3 py-1 rounded-md shadow-click'>
                    Check
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-custom-font font-medium leading-6 text-custom-text text-center my-2">
                                    Bank Hijaiyah
                                </Dialog.Title>
                                <div className=' w-full flex flex-wrap'>
                                    {boxes.map(({ name, image, type }, index) => (<Box name={name} type={type} isDropped={isDropped(name)} key={index} image={image} closeModal={closeModal} />))}
                                </div>

                                {/* <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Got it, thanks!
                                    </button>
                                    </div> */}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
});
