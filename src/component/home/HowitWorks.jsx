import React from 'react'
import DefaultView from '../defaultLayout'

function HowitWorks() {
  return (
    <div className='bg-slate-800 sm:block hidden w-full text-white my-16 p-3'>
        <DefaultView>
        <div className='text-center font-bold text-lg'>
            How it works
        </div>
        <div>
            <ol className='my-5 flex flex-col justify-center max-w-[75%] mx-auto' >
                <li>
                   1. Book mock interviews whenever you like
                </li>
                <li>
                  2.  Meet with your interviewer (a senior engineer from FAANG & other top companies) for virtual, fully anonymous sessions
                </li>
                <li>
                   3. Get detailed, actionable feedback about exactly  what you need to work on to get the job you deserve
                </li>
            </ol>
        </div>
        </DefaultView>
    </div>
  )
}

export default HowitWorks