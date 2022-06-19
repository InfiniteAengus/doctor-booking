import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SocialIconLink = (props) => {
  const { type } = props

  return (
    <div className='bg-primary-theme-color w-8 h-8 rounded-full flex items-center justify-center p-2'>
      <Link href='/'>
        <a>
          <img src={`/icons/${type}.svg`} alt={type} />
        </a>
      </Link>
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

  return (
    <div className='flex flex-col md:flex-row gap-8 items-center'>
      <img src='/doctors/doctor_3.png' alt='doctor' />
      <div className='flex flex-col gap-5'>
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
      </div>
    </div>
  )
}

export default DoctorPage
