import React from 'react'
import DefaultView from '../defaultLayout'
import Image from 'next/image'

function Section1() {
  return (
    <DefaultView>
        <div className='md:flex my-4 justify-between items-center'>
    <div className='w-full p-5'>
        <div className='text-3xl md:text-4xl font-semibold'>
        Book technical mock interviews with engineers from top companies
        </div>
        <div className='w-full md:hidden'>
        <Image
        src='https://interviewingio-assets.s3.amazonaws.com/images/schedule-practice.svg'
        height={1300}
        width={1300}
        alt='step1'
        />
    </div>
        <div className='my-5 text-sm md:text-xl'>
        Your interviewer will be a senior engineer with extensive experience interviewing people at FAANG and other top companies. You'll run through exactly the kinds of questions you'd see in a real interview.
        </div>
        <div>
            <span className='font-bold'>
            Mock technical interviews & mentorship sessions
            </span>
            <ul className='my-4 mx-5'>
                <li className='flex gap-3'>
                <span>
                    &#x2022; 
                    </span>
                     Algorithms and data structures
                </li>
                <li className='flex gap-3'>
                 <span>
                    &#x2022; 
                    </span> Coding interviews
                </li>
                <li className='flex gap-3'>
                 <span>
                    &#x2022; 
                    </span> System design
                </li>
                <li className='flex gap-3'>
                 <span>
                    &#x2022; 
                    </span> Front-end engineering
                </li>
                <li className='flex gap-3'>
                 <span>
                    &#x2022; 
                    </span> Engineering management
                </li>
                <li className='flex gap-3'>
                 <span>
                    &#x2022; 
                    </span> Behavioral practice interviews
                </li>
                <li className='flex gap-3'>
                 <span>
                    &#x2022; 
                    </span>  Staff-level+ and manager practice interviews
                </li>
            </ul>
        </div>
        <div>
        <span className='font-bold'>
            Amazon/Google/Facebook multi-session dedicated coaching
            </span>
            <div className='text-sm mx-4 my-4'>
            If you're serious about getting hired at Amazon, Google, or Facebook, this is the best way to prepare. We'll pair you with an experienced interviewer from Amazon, Google, or Facebook, and they will design a lesson plan customized to you and the role you're applying for. Through 3, 5 or 10 one-on-one sessions with a mentor, you'll cover everything you need to ace your interview and land your dream job.
            </div>
        </div>
    </div>
    <div className='w-full md:block hidden'>
        <Image
        src='https://interviewingio-assets.s3.amazonaws.com/images/schedule-practice.svg'
        height={1300}
        width={1300}
        alt='step1'
        />
    </div>
        </div>
    </DefaultView>
  )
}

export default Section1