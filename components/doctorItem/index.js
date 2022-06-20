/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

const DoctorItem = (props) => {
  const router = useRouter()
  const { id, name, description } = props

  const imageId = Math.floor(Math.random() * 6 + 1)

  const handleClick = () => {
    router.push(`doctor/${id}`)
  }

  return (
    <div
      className='relative rounded-md shadow-lg p-3 border-2 transition-all cursor-pointer'
      onClick={handleClick}
    >
      <div className='w-full rounded-md overflow-hidden'>
        <img
          src={`/doctors/doctor_${imageId}.png`}
          alt='doctor'
          className='object-cover w-full'
        />
      </div>

      <h4 className='font-bold text-center my-2'>{name}</h4>
      <p className='max-h-20 max-w-100 overflow-hidden text-ellipsis text-center'>
        {description.slice(0, 60)}...
      </p>
    </div>
  )
}

export default DoctorItem
