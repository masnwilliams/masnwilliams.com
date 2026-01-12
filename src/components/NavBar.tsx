'use client'

import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from '@/components/SocialLinks'

const NavBar = () => {
  return (
    <nav className="mx-4 sm:mx-20 md:mx-32 mt-4 sm:mt-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Profile Image */}
          <Link
            href={'/'}
            className={'hover:scale-105 transition-all duration-200 group'}>
            <div className="relative">
              <Image
                src={'/mason.jpg'}
                alt={'Mason Williams'}
                width={40}
                height={40}
                className={'w-8 h-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-gray-100 group-hover:ring-gray-200 transition-all duration-200'}
              />
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex items-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
