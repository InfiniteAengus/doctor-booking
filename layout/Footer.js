import Link from 'next/link'
import Image from 'next/image'
import { companyLinks } from './config'

const Footer = () => {
  return (
    <footer className='bg-primary-theme-color text-white'>
      <div className='container pt-10 pb-10'>
        <section className='flex justify-between'>
          <div className='w-100 h-100 relative min-w-[40%] hidden md:block'></div>
          <div className='flex justify-around grow'>
            <div>
              <h4>Services</h4>
              {Object.keys(companyLinks).map((k) => (
                <Link key={k} href={companyLinks[k]}>
                  <a>
                    <p className='text-white'>{k}</p>
                  </a>
                </Link>
              ))}
            </div>
            <div>
              <h4>Links</h4>
              {Object.keys(companyLinks).map((k) => (
                <Link key={k} href={companyLinks[k]}>
                  <a>
                    <p className='text-white'>{k}</p>
                  </a>
                </Link>
              ))}
            </div>
            <div>
              <h4>Company</h4>
              {Object.keys(companyLinks).map((k) => (
                <Link key={k} href={companyLinks[k]}>
                  <a>
                    <p className='text-white'>{k}</p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </footer>
  )
}

export default Footer
