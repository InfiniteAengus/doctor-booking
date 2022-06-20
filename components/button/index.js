const Button = ({ text, handleClick, ...props }) => {
  return (
    <button
      className='bg-primary-theme-color text-white py-3 rounded-md w-full max-w-xs disabled:bg-gray-300 disabled:text-gray-800'
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
