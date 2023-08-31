import { FeatureCard } from '@/web/components'
import React from 'react'

export const FeatureSection = ({ features }) => {
    return (
        <div className='max-w-screen-xl p-8 xl:p-0 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            {features?.map((feature) => {
                return (
                    <FeatureCard key={feature.title} src={feature.src} title={feature.title} data={feature.data} />
                )
            })}
        </div>
    )
}
