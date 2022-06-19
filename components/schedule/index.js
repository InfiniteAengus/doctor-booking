import Button from '../button'

const TimeButton = (props) => {
  const { time } = props
  return <button>{time}</button>
}

const Schedule = () => {
  return (
    <div className='p-5 border-[1px] h-full flex flex-col gap-3'>
      <h5>Times available</h5>
      <div></div>
      <input type='text' placeholder='Input your name' />
      <Button text='Confirm Booking' />
    </div>
  )
}

export default Schedule
