import React from 'react'
import { getRbData } from '@/data/repository'
import Grid from './Grid'

export default async function page() {
    const data = await getRbData();
  return (
    <div>
        <Grid data={data} />
    </div>
  )
}
