import { useEffect, useState } from 'react'
import DoctorItem from '/components/doctorItem'

import { apiGetDoctors } from '/utils/api'

import styles from '/styles/Home.module.css'

export default function Home() {
  const [doctors, setDoctors] = useState([])

  const getDoctorList = async () => {
    try {
      const res = await apiGetDoctors()
      setDoctors(res)
    } catch {
      setDoctors([])
    }
  }

  useEffect(() => {
    getDoctorList()
  }, [])

  return (
    <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs-grid-cols-1 gap-10'>
      {doctors.map((doctor) => (
        <DoctorItem
          key={doctor.id}
          name={doctor.name}
          id={doctor.id}
          description={doctor.description}
        />
      ))}
    </div>
  )
}
