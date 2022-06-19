const Button = (props) => {
  const { text, handleClick } = props
  return (
    <button className='bg-primary-theme-color text-white py-3 rounded-md w-full max-w-xs' onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
