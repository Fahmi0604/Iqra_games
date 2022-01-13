import './App.css';
import { Fragment, useState } from 'react';
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { SpeakerphoneIcon, MenuIcon, XIcon, ClipboardListIcon } from '@heroicons/react/solid'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Tugas from './pages/Tugas';
import Game1 from './pages/Game1';

import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import { DndProvider, TouchTransition, MouseTransition } from 'react-dnd-multi-backend'

export const HTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
}


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Tugas', href: '/tugas', current: false },
  { name: 'Toko', href: '#', current: false },
  { name: 'Profil', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <DndProvider options={HTML5toTouch}>
      <Router>
        <Disclosure as="nav" className="bg-custom-primary">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-custom-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-6 w-auto"
                        src="/iqra_logo.svg"
                        alt="iqra_logo"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/iqra_logo.svg"
                        alt="iqra_logo"
                      />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}

                            className={classNames(
                              item.current ? 'bg-custom-secondary text-white' : 'text-white hover:bg-custom-secondary hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      onClick={openModal}
                      className="bg-custom-primary p-1 rounded-full text-white hover:text-gray-200"
                    >
                      <span className="sr-only">View notifications</span>
                      <SpeakerphoneIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-custom-secondary text-white' : 'text-white hover:bg-custom-secondary hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/tugas' element={<Tugas />} />
          <Route path='/game1' element={<Game1 />} />

        </Routes>

        <div as='footer' className='bg-custom-primary'>
          <p className='text-center text-white py-2'>Copyright 2022</p>
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
                <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-custom-font font-medium leading-6 text-custom-text text-center mt-2">
                    Notifikasi
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className='flex'>
                      <ClipboardListIcon className='h-10 w-10 bg-custom-secondary rounded-full p-2 text-custom-dark mr-4' />
                      <div className='flex flex-col justify-between'>
                        <h4 className='text-custom-text'>Tugas Baru Minggu 1</h4>
                        <p className='text-custom-secondary text-xs'>Selasa, 11 Januari 2022</p>
                      </div>
                    </div>
                    <div as='line' className='mt-4 w-full h-px bg-custom-secondary bg-opacity-30' />
                  </div>
                  <div className="mt-4">
                    <div className='flex'>
                      <ClipboardListIcon className='h-10 w-10 bg-custom-secondary rounded-full p-2 text-custom-dark mr-4' />
                      <div className='flex flex-col justify-between'>
                        <h4 className='text-custom-text'>Tugas Baru Minggu 1</h4>
                        <p className='text-custom-secondary text-xs'>Selasa, 11 Januari 2022</p>
                      </div>
                    </div>
                    <div as='line' className='mt-4 w-full h-px bg-custom-secondary bg-opacity-30' />
                  </div>
                  <div className="mt-4">
                    <div className='flex'>
                      <ClipboardListIcon className='h-10 w-10 bg-custom-secondary rounded-full p-2 text-custom-dark mr-4' />
                      <div className='flex flex-col justify-between'>
                        <h4 className='text-custom-text'>Tugas Baru Minggu 1</h4>
                        <p className='text-custom-secondary text-xs'>Selasa, 11 Januari 2022</p>
                      </div>
                    </div>
                    <div as='line' className='mt-4 w-full h-px bg-custom-secondary bg-opacity-30' />
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

      </Router>
    </DndProvider>
  )
}
