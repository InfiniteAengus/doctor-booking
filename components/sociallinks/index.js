import Image from 'next/image'
import Link from 'next/link'

const SocialIconLink = (props) => {
  const { type } = props

  return (
    <div className='bg-primary-theme-color w-8 h-8 rounded-full flex items-center justify-center p-2 border-white border-[1px]'>
      <Link href='/'>
        <a>
          <Image
            src={`/icons/${type}.svg`}
            alt={type}
            width='20px'
            height='20px'
          />
        </a>
      </Link>
    </div>
  )
}

export default SocialIconLink
