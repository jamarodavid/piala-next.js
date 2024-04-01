import React from 'react'
import moment from 'moment'
import Card from '../components/Card'
import clsx from 'clsx'
interface Props{
    matches? : Match[]
    date?: string 
}

const DateTitle=({date}:Props)=>{

  const day = moment(date).format("dddd ")
  const _date = moment(date).format("Do-YYYY-MM ")
  const isToday = moment(date).isSame(moment(),"day")

  return <div>
    {isToday ? <span>Hari ini</span>:<span className='font-bold' >{day}</span>}
    <span className='font-semibold' >{_date}</span>
  </div>
}
export default function SectionRow({matches,date}:Props) {
  const isToday=moment(date).isSame(moment(),"day")
  return (
    <div className='mt-[40px]' >
      <DateTitle  date={date} />
      <div className={clsx("grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-1",isToday && "lg:grid-cols-2 grid-cols-1")} >
          {matches?.map((match,index)=>(
            <Card key={index} match={match} isToday={isToday}/>
          ))}
      </div>
    </div>
  )
}
