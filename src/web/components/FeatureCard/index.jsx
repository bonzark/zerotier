import React from 'react'
import { SectionTitle } from '..'

export const FeatureCard = ({ title, src, data }) => {
    return (
        <div className='text-center text-white sm:px-8 sm:py-4'>
            <img src={src} alt="alt" className='w-80 md:w-40 md:h-40 m-auto' />
            <SectionTitle children={title} />
            {data?.map((paragraph) => (
                <p key={paragraph} className='py-5'>{paragraph}</p>
            ))}
        </div>
    )
}

