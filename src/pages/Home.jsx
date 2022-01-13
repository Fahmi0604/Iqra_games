import React from 'react'
import { PlayIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'


export default function Home() {

    let navigate = useNavigate();

    return (
        <div className='bg-custom-primary min-h-screen flex flex-col items-center pb-4'>
            <img className='md:w-3/4 md:-mt-16 lg:w-1/2 lg:-mt-24' src="/ilustrasi.svg" alt="ilustrasi" />
            <h1 className='px-4 font-custom-font font-medium text-2xl text-center text-white -mt-11 lg:-mt-24'>Belajar Huruf Hijaiyah Sambil Bermain</h1>
            <p className='px-16 font-custom-font text-xs text-center text-white mt-1'>Belajar mengenal huruf hijaiyah dengan bermain game lebih menyenangkan ✨</p>
            <button className='flex mt-4 bg-white py-2 px-3 rounded-full shadow-notclick hover:bg-custom-secondary hover:text-white hover:shadow-click' onClick={() => navigate('/tugas')}>
                <PlayIcon className='h-6 w-6 mr-1' />
                <p className='font-custom-font font-medium text-base'>Bermain</p>
            </button>
        </div>
    )
}
