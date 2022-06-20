import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='shadow-md'>
      <div className='container h-16 p-3'>
        <div className='max-w-[150px] h-full relative'>
          <Link href='/'>
            <a>
              <Image
                src='/logo.png'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
