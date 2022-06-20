/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { apiGetDoctorInfo } from '/utils/api'

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
  const [info, setInfo] = useState({})
  const { id } = router.query

  const getDoctorInfo = async () => {
    try {
      const res = await apiGetDoctorInfo(id)
      setInfo(res)
    } catch {
      setInfo({})
    }
  }

  const handleClick = () => {
    router.push(`/book/${id}`)
  }

  useEffect(() => {
    if (router.isReady) {
      getDoctorInfo()
    }
  }, [id, router, router.isReady]) //eslint-disable-line

  return (
    <div className='flex flex-col lg:flex-row gap-8 items-center'>
      <img src='/doctors/doctor_3.png' alt='doctor' />
      <div className='flex flex-col gap-5 items-center lg:items-baseline'>
        <h2>{info?.name}</h2>
        <p>{info?.description}</p>
        <p>
          Address: {info?.address?.district} ,{info?.address?.line_1} ,
          {info?.address?.line_2}
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
          {info.opening_hours?.map((day) => (
            <Availability
              key={day.day}
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
