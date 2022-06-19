import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import moment from 'moment'

import SocialIconLinks from '../../components/sociallinks'
import Calendar from '../../components/calendar'
import Schedule from '../../components/schedule'

const BookPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [doctorInfo, setDoctorInfo] = useState()
  const [bookingInfo, setBookingInfo] = useState()

  return (
    <div>
      <div className='bg-primary-theme-color p-3 rounded-md flex justify-between items-center mb-10'>
        <div className='flex items-center gap-5'>
          <Image
            src='/doctors/doctor_3.png'
            alt='doctor'
            width='100px'
            height='130px'
            className='rounded-md border-4 border-white'
          />
          <h2 className='text-white'>Dr.Loyd Wilson</h2>
        </div>
        <div className='flex gap-2'>
          <SocialIconLinks type='twitter' />
          <SocialIconLinks type='facebook' />
          <SocialIconLinks type='google' />
          <SocialIconLinks type='instagram' />
        </div>
      </div>

      <div className='text-center'>
        <h4 className='text-primary-theme-color'>Book Now</h4>
        <h3>Make An Appointment To Book Your Seat</h3>
        <div className='flex flex-col lg:flex-row gap-10 mt-10'>
          <div className='w-full lg:w-7/12'>
            <Calendar />
          </div>
          <div className='grow'>
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage
