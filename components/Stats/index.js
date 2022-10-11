import React from 'react'
import { capitalize } from 'utils/capitalize'

const Stats = ({ stats }) => {
  let sumStats = 0
  const statsDiv = stats.map((stat, index) => {
    sumStats += stat.base_stat
    return (
      <div
        className='flex flex-row items-center justify-between text-sm'
        key={index}>
        <span className=''>{capitalize(stat.stat.name)}</span>
        <span className=''>{stat.base_stat}</span>
      </div>
    )
  })

  return (
    <div className='flex flex-col w-full gap-1 p-1'>
      <p className='text-center text-sm opacity-30'>Stats</p>
      {statsDiv}
      <div className='flex flex-row items-center justify-between text-sm'>
        <span>Total</span>
        <span>{sumStats}</span>
      </div>
    </div>
  )
}

export default Stats
