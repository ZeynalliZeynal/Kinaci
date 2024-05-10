import React from 'react'
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
export default function VisitOffice() {
    return (
        <>
            <section className='container'>
                <div className="text-center my-8">
                    <h2>Ofisimizi ziyarət edin</h2>
                    <p>Rieltorun hər ölçüdə və yerləşmə potensialında 10.000-dən çox ofisi var.</p>
                </div>
                <div className="flex items-center justify-center my-8">
                    <div className='mx-auto text-center'>
                        <h3 className='font-bold text-2xl'>Ümumi mərkəz</h3>
                        <p className='w-52 text-base'>Mahmutlar Yangılı cad 11
                            Alanya / Turkey</p>
                    </div>
                    <div className='mx-auto text-center'>
                        <h3 className='font-bold text-2xl'>Əlaqə nömrələrimiz</h3>
                        <p className='w-52 text-base'>+905441380707
                            info@kinacigroup.com</p>
                    </div>
                    <div className='mx-auto text-center'>
                        <h3 className='font-bold text-2xl'>İş saatlarımız</h3>
                        <p className='w-52 text-base'>Bazar ertəsi-Cümə: 9:00-19:00
                            Şənbə: 10:00-17:00</p>
                    </div>
                </div>
                <div>
                    <span className='text-5xl'>
                        <FaWhatsapp />
                    </span>
                    <span className='text-5xl'>
                        <FaWhatsapp />
                    </span>
                    <span className='text-5xl'>
                        <FaTelegram />
                    </span>
                </div>
            </section>
        </>
    )
}