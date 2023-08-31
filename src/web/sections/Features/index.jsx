import React from 'react'
import { FeatureCard, SectionTitle } from '@/web/components'
import { featuresData } from '@/web/constants'

export const FeatureSection = () => {
    return (
        <>
            <SectionTitle>Secure networks for teams of any size</SectionTitle>
            <div className='max-w-screen-xl p-8 xl:p-0 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {featuresData?.map((feature) => {
                    return (
                        <FeatureCard key={feature.title} src={feature.src} title={feature.title} data={feature.data} />
                    )
                })}
            </div>
        </>
    )
}
