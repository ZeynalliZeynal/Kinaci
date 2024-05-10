import React from 'react'

export default function BankInfo() {
    return (
        <>
            <section className='bg-blue-100'>
                <div className="container my-8">
                    <div>
                        <h2 className='text-5xl'>Bank Hesabı Məlumatımız</h2>
                        <p className='text-sm'>Rieltorun hər ölçüdə və yerləşmə potensialında 10.000-dən çox ofisi var.</p>
                    </div>
                    <div>
                        <div className='text-xl my-6'>
                            <p> <span className='text-orange-500'>$</span>: Ad Soyad/Ünvan: KINACI PROPERTY EMLAK İNŞAAT TAAHHÜT TURİZM VE TİC.LTD.ŞTİ</p>
                            <h5 className='font-bold'><span className='text-orange-500'>IBAN:</span>TR42 0006 2000 6020 0009 0898 32</h5>
                        </div>
                        <div className='text-xl my-6'>
                            <p> <span className='text-orange-500'>€</span>: Ad Soyad/Ünvan: KINACI PROPERTY EMLAK İNŞAAT TAAHHÜT TURİZM VE TİC.LTD.ŞTİ</p>
                            <h5 className='font-bold'><span className='text-orange-500'>IBAN:</span>TR85 0006 2000 6020 0009 0898 34</h5>
                        </div>
                        <div className='text-xl my-6'>
                            <p> <span className='text-orange-500'>₺</span>: Ad Soyad/Ünvan: KINACI PROPERTY EMLAK İNŞAAT TAAHHÜT TURİZM VE TİC.LTD.ŞTİ</p>
                            <h5 className='font-bold'><span className='text-orange-500'>IBAN:</span>TR13 0006 2000 6020 0006 2968 51</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}