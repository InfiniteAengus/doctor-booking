import { useCallback, useMemo, useState } from 'react'
import Button from '../button'

import { getTime } from '/utils/helper'
import { apiPostBooking } from '/utils/api'

const TimeButton = (props) => {
  const { time, name } = props
  return (
    <button className='bg-primary-component-color text-white block rounded-md p-3 relative flex items-center justify-center'>
      {time}-{name}
      <img
        src='/icons/checked.svg'
        alt='checked'
        className='invert absolute right-5'
      />
    </button>
  )
}

const Bookings = (props) => {
  const { opening_hours, data, date, doctorId } = props

  const [bookingData, setBookingData] = useState({
    hour: '00',
    min: '00',
    name: '',
  })

  const validation = useMemo(() => {
    //when the name is empty
    if (!bookingData.name || bookingData.name === '') return false

    //when the time is less than now
    const today = new Date()
    if (
      Number(bookingData.hour + '.' + bookingData.min) <
      Number(today.getHours() + '.' + today.getMinutes())
    )
      return false

    if (
      Number(bookingData.hour + '.' + bookingData.min) <
        Number(opening_hours?.start) ||
      Number(bookingData.hour + '.' + bookingData.min) + 1 >
        Number(opening_hours?.end)
    )
      //when the time is in out of range of working time
      return false

    // when there is already a schedule
    const ind = data?.findIndex(
      (d) =>
        Number(d.start) + 1 >
          Number(bookingData.hour + '.' + bookingData.min) &&
        Number(d.start) - 1 < Number(bookingData.hour + '.' + bookingData.min)
    )

    return ind === -1 ? true : false
  }, [bookingData]) //eslint-disable-line

  const sortData = useCallback(
    (data) => {
      let temp = data?.map((i) => i)
      temp.sort((a, b) => a.start - b.start)
      return temp
    },
    [data] //eslint-disable-line
  )

  const handleConfirmBooking = async () => {
    try {
      await apiPostBooking({
        name: bookingData.name,
        start: bookingData.hour + '.' + bookingData.min,
        doctorId: doctorId,
        date: date,
        status: 'cancelled',
      })

      alert('successfully booked')
    } catch {}
  }

  const handleDataChange = (val, type) => {
    setBookingData((prev) => ({ ...prev, [type]: val }))
  }

  return (
    <div className='p-5 border-[1px] h-full flex flex-col gap-3 text-left shaodw-2xl'>
      <h5>Times booked</h5>
      <div className='grid grid-cols-2 gap-2 max-h-[300px] overflow-auto p-2'>
        {sortData(data).map((t) => (
          <TimeButton key={t.id} time={getTime(t.start)} name={t.name} />
        ))}
      </div>
      <h5 className='mt-auto'>Select Time</h5>
      <div className='flex gap-3'>
        <select onChange={(e) => handleDataChange(e.target.value, 'hour')}>
          {Array(24)
            .fill(0)
            .map((_, ind) => (
              <option
                key={`hour_option_${ind}`}
                value={String(ind).padStart(2, '0')}
              >
                {getTime(ind, 0)}
              </option>
            ))}
        </select>
        <select onChange={(e) => handleDataChange(e.target.value, 'min')}>
          {Array(60)
            .fill(0)
            .map((_, ind) => (
              <option
                key={`min_option_${ind}`}
                value={String(ind).padStart(2, '0')}
              >
                {String(ind).padStart(2, '0')}
              </option>
            ))}
        </select>
      </div>
      <h5>Input Name</h5>
      <input
        type='text'
        placeholder='Input your name'
        onChange={(e) => handleDataChange(e.target.value, 'name')}
      />
      <Button
        text='Confirm Booking'
        disabled={!validation}
        onClick={handleConfirmBooking}
      />
    </div>
  )
}

export default Bookings
