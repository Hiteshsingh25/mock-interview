import React from 'react'
import Button from '../button'
import SecondaryButton from '../button/SecondaryButton'

export default function () {
  return (
    <div style={{boxShadow:" 0 2px 2px 0px #5757e2"}}>
    <div className='flex justify-between max-w-[1152px] mx-auto px-4 pt-4 pb-3 items-center' >

        <div>
            LOGO
        </div>
        <div>
            <ul className='flex gap-6  items-center'>
                <li className='hover:text-[#5757e28e] text-slate-500 font-semibold text-sm'>
                    HOME
                </li>
                <li className='hover:text-[#5757e28e] text-slate-500 font-semibold text-sm'>
                    CONTACT US
                </li>
                <li className='hover:text-[#5757e28e] text-slate-500 font-semibold text-sm'>
                    PARTNERS
                </li>
                <li className='flex  gap-2'>
                    <Button
                    text='Join as Job Seeker'
                    />
                    <SecondaryButton
                    text='Join as Employer'
                    />
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}
