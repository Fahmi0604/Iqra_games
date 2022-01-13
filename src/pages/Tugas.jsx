import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'

export default function Tugas() {

    let navigate = useNavigate()

    return (
        <div className='bg-custom-primary min-h-screen flex flex-col items-center'>
            <h1 className='text-white text-2xl text-center mt-4 font-medium'>Tugas</h1>
            <div className="w-fit  mt-4 relative text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Masukan kode kelas"
                />

                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <SearchIcon className="text-gray-600 h-4 w-4 fill-current" >
                    </SearchIcon>
                </button>
            </div>

            <div className='w-90% bg-white mt-4 p-4 rounded-lg'>
                <p className='w-fit text-custom-text text-sm font-medium bg-custom-orange p-2 mb-4 rounded'>Kode Kelas : AADC</p>
                <div as='card-container' className='flex flex-col items-center flex-wrap md:flex-row'>
                    <button as='card' className='flex items-center w-full p-4 mb-4 bg-custom-secondary rounded-md shadow-click md:w-48% md:mx-1% lg:w-31% lg:mx-1%' onClick={() => navigate('/game1')}>
                        <img src="/ilustrasi_buku.svg" alt="buku" />
                        <div className='flex flex-col ml-4 text-left'>
                            <h2 className='text-white font-custom-font font-medium text-lg'>1-Membaca</h2>
                            <p className='text-white font-custom-font text-xs mt-2'>Game ini akan mengajarkan kamu mencocokan huruf hijaiyah melalui puzzle</p>
                        </div>
                    </button>
                    <button as='card' className='flex items-center w-full p-4 mb-4 bg-custom-secondary rounded-md shadow-click md:w-48% md:mx-1% lg:w-31% lg:mx-1%'>
                        <img src="/ilustrasi_headphone.svg" alt="headphone" />
                        <div className='flex flex-col ml-4 text-left'>
                            <h2 className='text-white font-custom-font font-medium text-lg'>2-Mendengar</h2>
                            <p className='text-white font-custom-font text-xs mt-2'>Game ini akan mengajarkan kamu mengenali suara huruf hijaiyah </p>
                        </div>
                    </button>
                    <button as='card' className='flex items-center w-full p-4 mb-4 bg-custom-secondary rounded-md shadow-click md:w-48% md:mx-1% lg:w-31% lg:mx-1%'>
                        <img src="/ilustrasi_menulis.svg" alt="menulis" />
                        <div className='flex flex-col ml-4 text-left'>
                            <h2 className='text-white font-custom-font font-medium text-lg'>3-Menulis</h2>
                            <p className='text-white font-custom-font text-xs mt-2'>Game ini akan mengajarkan kamu cara menulis huruf hijaiyah</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
