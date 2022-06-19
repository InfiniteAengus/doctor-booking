import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import SocialIconLink from '/components/sociallinks'
import Button from '/components/button'

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const Availability = (props) => {
  const { weekDay, start, end } = props

  return (
    <div className='border-2 p-2 bg-secondary-theme-color rounded-md bg-opacity-90 text-white'>
      <h5>{weekDay}</h5>
      <p>
        {start} - {end}
      </p>
    </div>
  )
}

const DoctorPage = () => {
  const router = useRouter()
  const [info, setInfo] = useState({
    id: 'M2159',
    address: {
      district: 'Kwun Tong',
      line_1: 'Unit 4, Floor 5, Block F',
      line_2: 'Boom Building',
    },
    description:
      'I have been engaged in all kinds of Surgery (thyroid glands, mammary glands, esophageal diseases, gastrointestinal diseases, hepatobiliary and pancreatic diseases, vascular diseases, and endoscopic surgery), emergency, and anesthesia works for about 20 years.In addition, I also have the experience as the director of a clinic in a rural area.',
    name: 'KWOK KWAN MAN',
    opening_hours: [
      {
        day: 'TUE',
        end: '19.50',
        isClosed: false,
        start: '9.50',
      },
      {
        day: 'FRI',
        end: '19.50',
        isClosed: false,
        start: '9.50',
      },
      {
        day: 'SUN',
        end: '18.00',
        isClosed: false,
        start: '9.50',
      },
      {
        day: 'MON',
        end: '19.50',
        isClosed: false,
        start: '9.50',
      },
      {
        day: 'THU',
        end: '19.50',
        isClosed: false,
        start: '9.50',
      },
      {
        day: 'WED',
        end: '19.50',
        isClosed: false,
        start: '9.50',
      },
      {
        day: 'SAT',
        end: '19.50',
        isClosed: false,
        start: '9.50',
      },
    ],
  })
  const { id } = router.query

  const handleClick = () => {
    router.push(`/book/${id}`)
  }

  return (
    <div className='flex flex-col lg:flex-row gap-8 items-center'>
      <img src='/doctors/doctor_3.png' alt='doctor' />
      <div className='flex flex-col gap-5 items-center lg:items-baseline'>
        <h2>{info.name}</h2>
        <p>{info.description}</p>
        <p>
          Address: {info.address.district} ,{info.address.line_1} ,
          {info.address.line_2}
        </p>
        <div className='flex gap-2'>
          <SocialIconLink type='twitter' />
          <SocialIconLink type='facebook' />
          <SocialIconLink type='google' />
          <SocialIconLink type='instagram' />
        </div>
        <Button text='Book Now' handleClick={handleClick} />
      </div>

      <div>
        <h4>Availability</h4>
        <div className='flex gap-2 flex-row lg:flex-col'>
          {info.opening_hours.map((day) => (
            <Availability
              key={day}
              weekDay={day.day}
              start={day.start}
              end={day.end}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorPage
