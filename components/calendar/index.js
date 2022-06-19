import React, { useState, useCallback } from 'react'

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'TUE', 'FRI', 'SAT']

const Calendar = (props) => {
  const { opening_hours } = props
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )
  const [selectedDate, setSelectedDate] = useState(new Date())

  const getDates = useCallback(() => {
    let tempDate = new Date(currentDate)
    const dates = []
    tempDate.setDate(currentDate.getDate() - currentDate.getDay())

    for (let i = 0; i < 35; i++) {
      let newDate = new Date(tempDate)
      dates.push(newDate)
      tempDate.setDate(tempDate.getDate() + 1)
    }

    return dates
  }, [currentDate])

  const isDisable = useCallback(
    (date) => {
      if (date.getTime() < new Date().getTime()) {
        return true
      }

      const ind = opening_hours?.findIndex(
        (d) => d.day === weekDays[date.getDay()]
      )
      return opening_hours?.[ind].isClosed
    },
    [opening_hours]
  )

  const handlePrevious = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    )
  }

  const handleNext = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    )
  }

  const onDayClick = (date) => {
    if (!isDisable(date)) {
      setSelectedDate(date)
    }
  }

  return (
    <div className='calendar'>
      <div className='calendar-header'>
        <div onClick={handlePrevious} className='cursor-pointer'>
          {'<'}
        </div>
        <h4>
          {currentDate.getMonth() + 1}, {currentDate.getFullYear()}
        </h4>
        <div onClick={handleNext} className='cursor-pointer'>
          {'>'}
        </div>
      </div>
      <div className='calendar-body'>
        {weekDays.map((w, ind) => (
          <div key={`week_${ind}`} className='week-day'>
            {w}
          </div>
        ))}
        {getDates().map((date, ind) => (
          <button
            key={`day_${ind}`}
            className={`calendar-day ${
              date.getTime() === selectedDate.getTime() ? 'selected' : ''
            } ${isDisable(date) ? 'disabled' : ''}`}
            onClick={() => onDayClick(date)}
          >
            <span className={`calendar-day-span`}>{date.getDate()}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calendar
