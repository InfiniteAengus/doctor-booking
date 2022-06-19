import DoctorItem from '../components/doctorItem'
import doctors from '../mockup/doctors'
import styles from '../styles/Home.module.css'

export default function Home() {
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
