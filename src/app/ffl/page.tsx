import React, { Suspense } from 'react'
import { getAllRbData } from '@/data/repository'
import Grid from './Grid'


export default async function page() {
        const data = await getAllRbData();
    return (
        <div>
                <Suspense fallback={<div>Loading...</div>}>
                        <Grid data={data} />
                </Suspense>
        </div>
    )
}
