export const getTime = (t, mode = 1) => {
  const hour = (((t * 100) / 100) % 12).toString()
  const min = ((t * 100) % 100).toString()

  if (!mode) {
    return `${hour.padStart(2, '0')}  ${t >= 12 ? 'PM' : 'AM'}`
  }

  return `${hour.padStart(2, '0')}:${min.padStart(2, '0')}  ${
    t >= 12 ? 'PM' : 'AM'
  }`
}
